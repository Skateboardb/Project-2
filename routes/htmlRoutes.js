var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.beer.findAll({}).then(function(dbBeer) {
      res.render("index", {
        msg: "Welcome!",
        Beer: dbBeer
      });
    });
  });

  // Load beer page and pass in an beer by id
  app.get("/beer/:id", function(req, res) {
    db.beer.findOne({ where: { id: req.params.id } }).then(function(dbbeer) {
      res.render("beer", {
        beer: dbbeer
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
