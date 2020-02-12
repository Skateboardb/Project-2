require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var apiURL = 'https://sandbox-api.brewerydb.com/v2/';
var apiKey = process.env.DB_PASS;
var passport = require("passport");
var bcrypt = require("bcrypt");
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

const initializePassport = require('./config/passport-config')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

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
