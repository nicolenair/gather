// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const jwtDecode = require('jwt-decode');


// router.get('/favicon.ico', (req, res) => {
// 	console.log(req.query)
// 	res.redirect('/index')
// })
// router.get('/login', (req, res) => {
// 	if (req.query["client_log"]!=="true"){
// 	res.render("login")
// 	} else{
// 		res.json({"client_log": "true", "projectName":req.query["projectName"]})
// 	}
// })

router.get('/', function(req, res){
	res.render('index');
 });

 router.get('/home', function(req, res){
	res.render('Home');
 });

// router.get('/', function(req, res){
// 	query = req.query
// 	if("token" in query){
// 	const {OAuth2Client} = require('google-auth-library');
// 			const client = new OAuth2Client(process.env.GOOGLE_SIGNIN);
// 			async function verify() {
// 			const ticket = await client.verifyIdToken({
// 					idToken: req.query["token"],
// 					audience: process.env.GOOGLE_SIGNIN,  // Specify the CLIENT_ID of the app that accesses the backend
// 					// Or, if multiple clients access the backend:
// 					//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
// 			});
// 			const payload = ticket.getPayload();
// 			const userid = payload['sub'];
// 			// If request specified a G Suite domain:
// 			//const domain = payload['hd'];
// 		}
// 		var token= req.query["token"]
// 		var sub= jwtDecode(token)["sub"]
// 		// console.log(jwtDecode(token))
// 		// console.log(name)
// 		verify()
// 		.then(a => {
// 			// console.log(name)
// 			// console.log(name)
// 			if(req.query["sub"]===sub){
// 			res.render('index')}else{res.render("login")}
// 		}
// 			)
// 	.catch(err => res.render("login"));}else{
// 		res.render("login")
// 	}
//  });


/*  This route render json data */
router.get('/json', (req, res) => {
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
	res.redirect('https://www.turbo360.co/landing')
})

module.exports = router
