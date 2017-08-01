var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(dbPost) {
		res.render("index", {burgers: dbPost});
	});
});

router.post("/", function(req, res) {
	db.Burger.create({
		burger_name: req.body.name,
		devoured: req.body.devoured
	}).then(function(dbPost) {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	db.Burger.update(
		{
			devoured: true
		},
    {
      where: {
        id: req.params.id
      }
  	}).then(function(dbPost) {
			res.redirect("/");
		});
});

module.exports = router;