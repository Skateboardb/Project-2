var express = require("express");
var app = express.Router();

var db = require("../models");

// Load index page
app.get("/", function(req, res) {
	// db.questions.findAll({}).then(function(data) {
	// 	var hbsObject = {
	// 		questions: data
	// 	};
	// 	// res.render("../views/index", hbsObject);
	// });

	// db.beer.findAll({}).then(function(data) {
	// 	var hbsObject = {
	// 		beers: data
	// 	};

	// 	res.render("../views/index", hbsObject);
	// });

	Promise.all([db.beer.findAll({}), db.questions.findAll({})]).then(data => {
		var hbsObject = {
			beers: data[0],
			questions: data[1]
		};
		res.render("../views/index", hbsObject);
	});
});

// app.get("/", function(req, res) {});

// app.get("/api/questions", function(req, res) {
// 	db.questions.findAll({}).then(function(result) {
// 		res.json(result);
// 	});
// });
// Load beer page and pass in an beer by id
// app.get("/beer/:id", function(req, res) {
// 	db.beer.findOne({ where: { id: req.params.id } }).then(function(dbbeer) {
// 		res.render("beer", {
// 			beer: dbbeer
// 		});
// 	});
// });

// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
	res.render("404");
});

module.exports = app;
