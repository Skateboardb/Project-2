var db = require("../models");

module.exports = function(app) {
  // Get all beer
  app.get("/api/beer", function(req, res) {
    db.beer.findAll({}).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // Create a new beer
  app.post("/api/Beer", function(req, res) {
    db.beer.create(req.body).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });

  // Delete an beer by id
  app.delete("/api/Beer/:id", function(req, res) {
    db.beer.destroy({ where: { id: req.params.id } }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
};
