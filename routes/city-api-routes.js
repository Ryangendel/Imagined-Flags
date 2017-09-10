var db = require("../models");

module.exports = function(app) {
  app.get("/api/cities", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Flag
    db.City.findAll({
      // Add order conditions here....
        order: [
            ['id', 'ASC']
        ],
      include: [db.Flag]
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });

  app.get("/api/cities/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Flag
    db.City.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Flag]
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });

  app.post("/api/cities", function(req, res) {
    db.City.create(req.body).then(function(dbCity) {
      res.json(dbCity);
    });
  });

  app.delete("/api/cities/:id", function(req, res) {
    db.City.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });

};
