var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", {burgers: data});
	});
});

router.post("/", function(req, res) {
	console.log("req.body.name: " + req.body.name);
	burger.insertOne("burger_name", [req.body.name], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition: " + condition);
	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;