// set up ======================================================================

var express = require('express');
var app = express();
				 		
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 3003; 				// set the port
var database = require('./config/database'); 			// load the database config
var passwordHash = require('password-hash');			// will use later
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)




var server = require('http').createServer(app).listen(port);




// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io
 
app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session




var router = express.Router();

router.use(function(req, res, next) {

	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();	
});


require('./app/routes.js')(app,passport);

console.log("App listening on port " + port);




