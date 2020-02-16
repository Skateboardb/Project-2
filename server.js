
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var apiURL = "https://sandbox-api.brewerydb.com/v2/";
var apiKey = process.env.DB_PASS;
var passport = require("passport");
var bcrypt = require("bcrypt");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

var bodyParser = require("body-parser");
var BreweryDb = require("node-brewerydb");
var client = new BreweryDb({ apiKey: "16194eefa3c198216f76be77bbbead48" });
var request = require("request");
var path = require("path");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

var beer = require("./controllers/beer");
var styles = require("./controllers/styles");

// Passport
const initializePassport = require("./config/passport-config");
initializePassport(
	passport,
	email => users.find(user => user.email === email),
	id => users.find(user => user.id === id)
);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.text());
app.use(flash());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/beers", beer);
app.use("/styles", styles);

// BreweryDB
client.beers({ name: "Budweiser" }, function(err, res) {
	if (err) {
		// handle errors
	}
	console.log(res);
});

// Handlebars
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main"
	})
);
app.set("view engine", "handlebars");

// Routes
require("./controllers/apiRoutes")(app);
var routes = require("./controllers/beers-controller");

app.use("/", routes);

require("./app");


// // Testing - Shannen
// require("./controllers/passport.js")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
	syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
	app.listen(PORT, function() {
		console.log(
			"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
			PORT,
			PORT
		);
	});
});

module.exports = app;
