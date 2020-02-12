var express = require("express");
var app = express.Router();
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var passport = require("passport");
var bcrypt = require("bcrypt");
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
var users = [];
var db = require("../models");

// Load index page


app.get("/", function(req, res) {
	res.render("../views/front");

});

//load survey
app.get("/quiz",  function(req, res) {
	db.questionanswers.findAll({}).then(function(data) {
		var hbsObject = {
			questionanswers: data
		};

		res.render("../views/quiz", hbsObject);
	});
});

//load input
app.get("/input", checkNotAuthenticated, function(req, res) {
	db.beer.findAll({}).then(function(data) {
		var hbsObject = {
			beers: data
		};

		res.render("../views/input", hbsObject);
	});
});


app.post('/input', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/input',
    failureFlash: true
}))

//register input
app.get("/register", checkNotAuthenticated, function(req, res) {
	db.beer.findAll({}).then(function(data) {
		var hbsObject = {
			beers: data
		};

		res.render("../views/register", hbsObject);
	});

app.get("/display", function(req, res) {});

//register input

app.post('/register', checkNotAuthenticated, async function(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/input')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/input')
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('./input')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
       return res.redirect('/')
    }
    next()
}



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
