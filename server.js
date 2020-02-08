require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");
var axios = require('axios');
// var apiURL = 'https://sandbox-api.brewerydb.com/v2/';
var apiKey = process.env.DB_PASS;
// var cors = require('cors')
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;
var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// app.use(cors())

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

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
// app.use(cors())

app.get('/api/beers/:pagenumber', function(req, res, next) {
  var pagenumber = req.params.pagenumber;
  axios.get('https://sandbox-api.brewerydb.com/v2/?'+apiKey+'&p='+pagenumber)
  .then( (response) => {
    console.log(response.data);
    console.log(response.data.numberOfPages)
    let postsArray = [];
    response.data.data.map( (posts) => {
      postsArray.push(posts);
    })
    res.json(postsArray);
  })
  .catch( (err) => {
    console.log(err);
  });
});
app.get('/api/beeritem/:detailid', function(req, res, next) {
  var detailid = req.params.detailid;
  axios.get('https://sandbox-api.brewerydb.com/v2/?'+apiKey+'&ids='+detailid)
  .then( (response) => {
    let postsArray = [];
    response.data.data.map( (posts) => {
      postsArray.push(posts);
    })
    res.json(postsArray);
  })
  .catch( (err) => {
    console.log(err);
  });
});




// Read the host address and the port from the environment
// var hostname = process.env.HOST;


// Return JSON regardless of HTTP method or route our web app is reached by
// var server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(`{"message": "Hello World"}`);
// });


// Start a TCP server listening for connections on the given port and host
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
//Static file declaration
// app.use(express.static(path.join(__dirname, 'client/build')));

// //production mode
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = '/index.html'));
//   })
// }
//build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/index.html'));
// })

// app.listen(port, () => console.log(`Server running on port ${port}`));
// //new comment
module.exports = app;
