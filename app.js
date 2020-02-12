// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var BreweryDb = require("brewerydb-node");
// var brewdb = new BreweryDb(["16194eefa3c198216f76be77bbbead48"]);
// var request = require("request");
// var path = require('path');

// app.use(bodyParser.json());

// app.get("/beer/:beerId", function(req, res) {
//   // in here a request to http://localhost:8000/breweries/g0jHqt will fetch example code
//   brewdb.beer.getById("g0jHqt", {}, function(err, beer) {
//     if (err) {
//       console.error(err);
//       res.status(500).send("An error occurred");
//     } else if (beer) {
//       // we found the beer
//       res.send(beer.name);
//     } else {
//       res.status(404).send("We could not find your beer");
//     }
//   });
// });
// app.listen(8000, function() {
//   console.log("Listening at http://localhost:8000");
// });

require('dotenv').config()
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var beer = require('./controllers/beer');
var styles = require('./controllers/styles');

var app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/controllers/beer.js', beer);
app.use('/controllers/styles.js', styles);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;

// // Endpoints

// // Beer specific search - beer.getById(id/Array of ids, params (see options in BreweryDb Api docs), callback)
// // /beer/:beerId
// brewdb.beer.getById("avMkil", {}, callback);

// // /beers?ids=
// brewdb.beer.getById(["avMkil", "XcvLTe"], { withBreweries: "Y" }, callback);

// // /beers?name=“bock”&abv=....
// // can provide params that beers endpoint accepts (like abv, ibu, etc.)
// brewdb.beer.find({ name:"bock" }, callback)

// // Brewery Search
// // /beer/:beerId
// brewdb.beer.getById("avMkil", {}, callback);

// // /beers?ids=
// brewdb.beer.getById(["avMkil", "XcvLTe"], { withBreweries: "Y" }, callback);

// // /beers?name=“bock”&abv=....
// // can provide params that beers endpoint accepts (like abv, ibu, etc.)
// brewdb.beer.find({ name:"bock" }, callback)

// // Brewery
// brewdb.breweries.getById("g0jHqt", {}, callback);
// brewdb.breweries.getById(["g0jHqt", {}, "MWi5Kp"], callback)
// brewdb.breweries.find( { established: 2010 }, callback)

// // Search
// brewdb.search.all( { q: "coors" }, callback);
// brewdb.search.beers({ q: "dogfish" }, callback);
// brewdb.search.breweries({ q: "dogfish" }, callback);

// // Category
// brewdb.category.all(callback);
// brewdb.category.getById(1, callback);

// // Style
// brewdb.style.all(callback);
// brewdb.style.getById(1,callback)
