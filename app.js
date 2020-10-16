// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

// const app = vertex.express() // initialize app


/*  
	Apps can also be initialized with config options as shown in the commented out example below. Options
	include setting views directory, static assets directory, and database settings. To see default config
	settings, view here: https://www.turbo360.co/docs 

*/

const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		url: process.env.PROD_MONGODB_URI,
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

const app = vertex.app(config) // initialize app with config options





// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes
// app.get('/*', function(req, res){
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
// 		verify().then(
// 	res.render('index')).catch(err => res.send("failure, invalid credentials"));
//  });

app.get('/*', function(req, res){
		res.render('index')
	 });

// app.get('/*', function(req, res){
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
// 		var email= jwtDecode(token)["email"]
// 		// console.log(jwtDecode(token))
// 		// console.log(name)
// 		verify()
// 		.then(a => {
// 			// console.log(name)
// 			// console.log(name)
// 			if(req.query["sub"]===sub){
// 			res.render('index')}else{ res.render("login")}
// 		}
// 			)
// 	.catch(err => res.render("login"));}else{
// 		res.render("login")
// 	}
//  });



module.exports = app