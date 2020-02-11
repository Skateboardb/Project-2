var express = require("express");
var app = express.Router();
var users = [];

var db = require("../models");

// Load index page
app.get("/", function(req, res) {
	Promise.all([db.beer.findAll({}), db.questions.findAll({})]).then(data => {
		var hbsObject = {
			beers: data[0],
			questions: data[1]
		};
		res.render("../views/front", hbsObject);
	});
});

// app.get("/quiz", function(req, res) {
// 	Promise.all([db.answers.findAll({}), db.questions.findAll({})]).then(data => {
// 		var hbsObject = {
// 			answers: data[0],
// 			questions: data[1]
// 		};
// 		res.render("../views/quiz", hbsObject);
// 	});
// });

//load survey
app.get("/quiz", function(req, res) {
	db.questionanswers.findAll({}).then(function(data) {
		var hbsObject = {
			questionanswers: data
		};

		res.render("../views/quiz", hbsObject);
	});
});

//load input
app.get("/input", function(req, res) {
	db.beer.findAll({}).then(function(data) {
		var hbsObject = {
			beers: data
		};

		res.render("../views/input", hbsObject);
	});
});

//register input

app.post("/register", function(req, res) {

	res.render("../views/register", hbsObject);
});

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
