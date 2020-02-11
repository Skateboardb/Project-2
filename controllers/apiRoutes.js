var db = require("../models");
var users = [];

module.exports = function(app) {
//  // Get all beer
//   app.get("/api/beer", function(req, res) {
//     db.beer.findAll({}).then(function(dbBeer) {
//       res.json(dbBeer);
//     });
//   });

//   // Create a new beer
//   app.post("/api/Beer", function(req, res) {
//     db.beer.create(req.body).then(function(dbbeer) {
//       res.json(dbbeer);
//     }); 
//   });

//   // Delete an beer by id
//   app.delete("/api/Beer/:id", function(req, res) {
//     db.beer.destroy({ where: { id: req.params.id } }).then(function(dbbeer) {
//       res.json(dbbeer);
//     });
//   });




app.post("/input", function(req, res) {
  
  var email = req.body
  
  console.log(req.body);
  db.beer.create({
    email: email
  }).then(function(dbbeer) {
    res.json(dbbeer);
  })
  users.push({
    email
  })
  console.log(users)
	res.send("hello");
	
});
};
