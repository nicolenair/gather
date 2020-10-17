///////// okokokokokokokok

// Full Documentation - https://www.turbo360.co/docs
const turbo = require("turbo360")({ site_id: process.env.TURBO_APP_ID });
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();
const Profile = require("../models/Profile");
const Project = require("../models/Project");
const ProjectDoc = require("../models/ProjectDoc");
const Annotation = require("../models/Annotation");
const express = require("express");
const joinPath = require("path").join;
const jwtDecode = require("jwt-decode");

var aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.ID_AWS,
  secretAccessKey: process.env.SEC_AWS,
  region: "us-west-2",
});
var s3 = new aws.S3();

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// create temporary client profile, different than regular sign in via dashboard, especially because we do not use google sign-in
router.post("/create-client-temp-profile", (req, res) => {
  body = req.body;
  query = req.query;
  if (
    body["userName"] === null ||
    body["userName"] === "" ||
    !("userName" in body)
  ) {
    res.send("please input userName");
  } else if (
    query["displayDoc"] === null ||
    query["displayDoc"] === "" ||
    !("displayDoc" in query)
  ) {
    res.send("please input display document");
  } else {
    Profile.findOneAndUpdate(
      { email: body["email"], userName: body["userName"] },
      { email: body["email"], userName: body["userName"] },
      { upsert: true }
    )
      .then((profile) => {
        //res.redirect("/api/project-details?"+"projectName="+query["projectName"]+"&now_user="+query["userName"]+"&client_log=true"+ "&displayDoc="+query["displayDoc"])
        //send to project-details
        res.json({
          displayDoc: req.query["displayDoc"],
          access_type: "client",
          profile: profile,
        }); //email??
      })
      .catch((err) => {
        res.json({
          confirmation: "fail",
          message: err.message,
        });
      });
  }
});

// when a freelance user uploads a file, we update project documents schema, project schema and profile schema in mongodb (future programmers should probably update
// this to mongoose/mongodb's populate rather than manual inheritance of information)
router.get("/update-project-documents", (req, res) => {
  query = req.query;
  document = {
    projectDocLink:
      "https://" +
      process.env.BUCKET_NAME +
      ".s3.us-west-2.amazonaws.com/" +
      query["key"],
    lastEdited: Date(Date.now()).toString(),
    projectDocKey: query["key"],
  };
  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.query["token"],
      audience: process.env.GOOGLE_SIGNIN,
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
  }
  verify()
    .then((a) => {
      body = req.body;
      var token = req.query["token"];
      var sub = jwtDecode(token)["sub"];
      ProjectDoc.create(document)
        .then((doc) => {
          console.log(doc["lastEdited"]);
          update = {
            $push: { projectDoc: doc },
            $set: {
              lastEdited: doc["lastEdited"],
              projectpic: doc["projectDocLink"],
            },
          };

          Project.findOne({ _id: query["projectId"] })
            .then((project) => {
              if (project._doc["freelancer"] === sub) {
                Project.findOneAndUpdate({ _id: query["projectId"] }, update, {
                  new: true,
                })
                  .then((projects) => {
                    query = req.query;
                    fil = { sub: sub };
                    Profile.find(fil)
                      .then((profiles) => {
                        console.log(profiles);
                        console.log(query);
                        const ind = profiles[0].projects.findIndex(
                          (i) => i["_id"].toString() === query["projectId"]
                        );
                        query = req.query;
                        fil = { sub: sub };
                        update = { $set: {} };
                        update["$set"]["projects." + ind + ".projectName"] =
                          projects["projectName"];
                        update["$set"]["projects." + ind + ".lastEdited"] =
                          projects["lastEdited"];
                        update["$set"]["projects." + ind + ".projectpic"] =
                          projects["projectpic"];
                        update["$set"]["projects." + ind + ".status"] =
                          projects["status"];
                        update["$set"]["projects." + ind + ".projectDoc"] =
                          projects["projectDoc"];

                        Profile.updateOne(fil, update, { new: true })
                          .then((profiles) => {
                            res.json({ confirmation: "success" });
                          })
                          .catch((err) => {
                            res.json({
                              confirmation: "fail",
                              message: err.message,
                            });
                          });
                      })
                      .catch((err) => {
                        res.json({
                          confirmation: "fail",
                          message: err.message,
                        });
                        //
                      })
                      .catch((err) => {
                        res.json({
                          confirmation: "fail",
                          message: err.message,
                        });
                      });
                  })
                  .catch((err) => {
                    res.json({ confirmation: "fail", message: err.message });
                  });
              } else {
                res.send("stop accessing another person's data");
              }
            })
            .catch((err) => {
              res.json({ confirmation: "fail", message: err.message });
            });
        })
        .catch((err) => {
          res.json({ confirmation: "fail", message: err.message });
        });
    })
    .catch((err) => {
      res.json({ confirmation: "fail", message: err.message });
    });
});

// connected to vanilla rest api plugin to create notes in the annotation collection of mongodb when users (freelancers or clients
// comment on pictures)
router.post("/create-notes", (req, res) => {
  console.log(req.body);
  Annotation.create({
    commenter: req.body["commenter"],
    context: req.body["context"],
    src: req.body["src"],
    text: req.body["text"],
    width: req.body["shapes%5B0%5D%5Bgeometry%5D%5Bwidth%5D"],
    height: req.body["shapes%5B0%5D%5Bgeometry%5D%5Bheight%5D"],
    x: req.body["shapes%5B0%5D%5Bgeometry%5D%5Bx%5D"],
    y: req.body["shapes%5B0%5D%5Bgeometry%5D%5By%5D"],
  })
    .then((annotations) => {
      res.json({ confirmation: "success" });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

// connected to vanilla rest api plugin to delete notes in the annotation collection of mongodb when users (freelancers or clients
// delete notes)
router.delete("/delete-notes/:id", (req, res) => {
  Annotation.findOneAndDelete({ _id: req.params["id"] })

    .then((profiles) => {
      res.json({
        confirmation: "success",
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});
// connected to vanilla rest api plugin to update notes in the annotation collection of mongodb when users (freelancers or clients
// update comments on pictures)
router.put("/update-notes/:id", (req, res) => {
  Annotation.findOneAndUpdate(
    { _id: req.params["id"] },
    { text: req.body["text"] }
  )

    .then((profiles) => {
      res.json({ confirmation: "success" });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

// connected to vanilla rest api plugin to create notes in the annotation collection of mongodb when users (freelancers or clients
// need to view annotations by search)
router.get("/annotation_search", (req, res) => {
  console.log("probably heree");
  console.log(req.query);
  Annotation.find(req.query)
    .then((profiles) => {
      res.send({
        confirmation: "success",
        data: profiles,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

// connected to vanilla rest api plugin to create notes in the annotation collection of mongodb when users (freelancers or clients
// need to view annotations)

router.get("/get-notes", (req, res) => {
  Annotation.find()
    .then((profiles) => {
      res.json({
        confirmation: "success",
        data: profiles,
      });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

// generalizable route to allow frontend to validate google sign in tokens at any time
router.get("/validate-token", (req, res) => {
  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.query["token"],
      audience: process.env.GOOGLE_SIGNIN, // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
  }
  verify()
    .then(function (a) {
      res.json({ confirmation: "success" });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

// route to get to dashboard (for freelancers only)
router.get("/dashboard", (req, res) => {
  // body = req.body
  query = req.query;

  if (req.query["token"] === "null" || !("token" in req.query)) {
    res.json({ confirmation: "token either null or nonexistent" });
  } else {
    console.log("dash in");
    const { OAuth2Client } = require("google-auth-library");
    const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: req.query["token"],
        audience: process.env.GOOGLE_SIGNIN, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });

      const payload = ticket.getPayload();
      const userid = payload["sub"];

      // If request specified a G Suite domain:
      //const domain = payload['hd'];
    }

    verify()
      .then((a) => {
        console.log("VERIFY");
        var token = req.query["token"];
        var sub = jwtDecode(token)["sub"];
        var picture = jwtDecode(token)["picture"];
        var name = jwtDecode(token)["name"];
        console.log(name);
        Profile.find({ sub: sub })
          .then((profile) => {
            if (req.query["client_log"] !== "true" && profile.length > 0) {
              console.log("op 1");
              Profile.find({ sub: sub })
                .then((profiles) => {
                  data = Object.assign(profiles[0], {
                    token: req.query["token"],
                  });
                  res.json({ data: data });
                })
                .catch((err) => {
                  res.json({
                    confirmation: "fail",
                    message: err.message,
                  });
                });
            } else if (req.query["client_log"] === "true") {
              console.log("op 2");
              //res.redirect("/api/project-details?"+"projectName="+req.query["projectName"]+"&now_user="+profiles[0]["userName"])
              console.log(req.query["displayDoc"]);
              //res.redirect("/api/create-client-temp-profile?projectName="+req.query["projectName"]+"&email="+body["email"]+"&userName="+body["userName"]+"&client_log="+req.query["client_log"] + "&displayDoc="+req.query["displayDoc"])
              res.json({
                data: {
                  projectName: req.query["projectName"],
                  email: body["email"],
                  client_log: req.query["client_log"],
                  displayDoc: req.query["displayDoc"],
                },
              });
            } else {
              console.log("op 3");
              Profile.create({ userName: name, sub: sub, profilepic: picture })
                .then((profiles) => {
                  data = Object.assign(profiles, { token: req.query["token"] });
                  res.json({ data: data });
                })
                .catch((err) => {
                  res.json({
                    confirmation: "failure to create new profile",
                    message: err.message,
                  });
                });
            }
          })
          .catch((err) => {
            res.json({
              confirmation: "failure to perform search on profiles",
              message: err.message,
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          confirmation: "invalid token",
          message: err.message,
        });
      });
  }
});

// route to view file page for a project, not secure because we want to allow link sharing
// router.get('/file', (req, res) => {
// 	query = req.query
// 	if(query["accessType"]==="freelancer" || !query["accessType"]){
// 	const {OAuth2Client} = require('google-auth-library');
// 		const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
// 		async function verify() {
// 		const ticket = await client.verifyIdToken({
// 				idToken: req.query["token"],
// 				audience: process.env.GOOGLE_SIGNIN,
// 		});
// 		const payload = ticket.getPayload();
// 		const userid = payload['sub'];
// 	}
// 	console.log(query)
// 		verify()
// 		.then(a=>{
// 			var token= req.query["token"]
// 			var sub= jwtDecode(token)["sub"]
// 			var name= jwtDecode(token)["name"]
// 			var picture = jwtDecode(token)["picture"]
// 			Project.findOne({_id:query["projectId"]})
// 			.then(a=>{
// 			if(sub===a._doc["freelancer"]){
// 		const data = {"projectId":query["projectId"], "fileURL":query["fileURL"], "accessType":query["accessType"]}
// 		res.json({data: data})
// 			}else{res.send("wrong account, sign into correct account")}})
// 			.catch(err => {
// 				res.json({
// 					confirmation: 'fail',
// 					message: err.message
// 				})
// 			})
// 		// .catch(err => res.send("invalid token3"))
// 		})
// 		.catch(err => {
// 			res.json({
// 				confirmation: 'fail',
// 				message: err.message
// 			})
// 		})
// 	}
// else if (query["accessType"]==="client"){
// 	const data = {"projectId":query["projectId"], "fileURL":query["fileURL"], "accessType":query["accessType"]}
// 	res.json({data: data})
// }})

router.get("/file", (req, res) => {
  query = req.query;
  if ("token" in req.query) {
    const { OAuth2Client } = require("google-auth-library");
    const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: req.query["token"],
        audience: process.env.GOOGLE_SIGNIN,
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
    }
    console.log(query);
    verify()
      .then((a) => {
        var token = req.query["token"];
        var sub = jwtDecode(token)["sub"];
        var name = jwtDecode(token)["name"];
        var picture = jwtDecode(token)["picture"];
        Project.findOne({ _id: query["projectId"] })
          .then((a) => {
            if (sub === a["freelancer"]) {
              const data = {
                projectId: query["projectId"],
                fileURL: query["fileURL"],
                client: "false",
              };
              res.json({ data: data });
            } else {
              const data = {
                projectId: query["projectId"],
                fileURL: query["fileURL"],
                client: "true",
              };
              res.json({ data: data });
            }
          })
          .catch((err) => {
            const data = {
              projectId: query["projectId"],
              fileURL: query["fileURL"],
              client: "true",
            };
            res.json({ data: data });
          });
        // .catch(err => res.send("invalid token3"))
      })
      .catch((err) => {
        const data = {
          projectId: query["projectId"],
          fileURL: query["fileURL"],
          client: "true",
        };
        res.json({ data: data });
      });
  } else {
    const data = {
      projectId: query["projectId"],
      fileURL: query["fileURL"],
      client: "true",
    };
    res.json({ data: data });
  }
});
// route to allow freelancers to view all images in project
router.get("/project-pictures", (req, res) => {
  query = req.query;
  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.query["token"],
      audience: process.env.GOOGLE_SIGNIN,
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
  }

  verify()
    .then((a) => {
      var token = req.query["token"];
      var sub = jwtDecode(token)["sub"];
      var name = jwtDecode(token)["name"];
      var picture = jwtDecode(token)["picture"];
      Project.findOne({ _id: query["projectId"] })
        .then((projects) => {
          if (sub === projects["freelancer"]) {
            const data = Object.assign(projects, {
              sub: sub,
              profilepic: picture,
            });
            var params = {
              Bucket: process.env.BUCKET_NAME,
              Fields: { key: makeid(5), acl: "public-read" },
            };
            s3.createPresignedPost(params, function (err, data2) {
              if (err) {
                console.error("Presigning post data encountered an error", err);
              } else {
                const data3 = Object.assign(data2, data);
                console.log(data3);
                res.json({ data: data3 });
              }
            });
          } else {
            res.json({ confirmation: "fail" });
          }
        })
        .catch((err) => {
          res.json({
            confirmation: "fail",
            message: err.message,
          });
        });
    })
    .catch((err) => {
      res.json({
        confirmation: "fail",
        message: err.message,
      });
    });
});

//route to allow freelancers to create a new proj
router.post("/project-create", (req, res) => {
  query = req.query;
  body = req.body;

  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.query["token"],
      audience: process.env.GOOGLE_SIGNIN, // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
  }

  body["lastEdited"] = Date(Date.now()).toString();
  verify()
    .then((a) => {
      var token = req.query["token"];
      var sub = jwtDecode(token)["sub"];
      body["freelancer"] = sub;
      Project.create(body)
        .then((projects) => {
          fil = { sub: sub };
          var project = {
            projectName: projects["projectName"],
            _id: projects["_id"],
            lastEdited: projects["lastEdited"],
            projectpic: projects["projectpic"],
            status: projects["status"],
            freelancer: projects["freelancer"],
          };
          update = { $push: { projects: project } };
          Profile.findOneAndUpdate(fil, update, { new: true })
            .then((profiles) => {
              res.json({ data: projects, body: body });
            })
            .catch((err) => {
              res.json({
                confirmation: "fail",
                message: err.message,
              });
            });
        })
        .catch((err) => {
          res.json({
            confirmation: "fail",
            message: err.message,
          });
        });
    })
    .catch((err) => {
      res.json({
        confirmation: "invalid token",
        message: err.message,
      });
    });
});

module.exports = router;
