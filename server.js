require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var BreweryDb = require('node-brewerydb');
var client = new BreweryDb({apiKey: "16194eefa3c198216f76be77bbbead48"});
var request = require("request");
var path = require('path');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(bodyParser.json());

// BreweryDB
client.beers({name: 'Budweiser'}, function(err, res) {
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

require("./app")


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
