var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {

	db.Burger.findAll({
		include: [ db.Customer ]
	}).then(function(dbBurger) {

		res.render("index", {burgers: dbBurger});

	});
});

router.post("/", function(req, res) {

	db.Customer.create({
		customer_name: "placeholder"
	}).then(function(dbCustomer) {

		db.Burger.create({
			burger_name: req.body.name,
			devoured: req.body.devoured,
			CustomerId: dbCustomer.dataValues.id
		}).then(function(dbBurger) {

				res.redirect("/");

		});
	});


});

router.put("/:id", function(req, res) {

	db.Burger.findAll({
		include: [ db.Customer ]
	}).then(function(results) {
		
		db.Customer.update(
			{
				customer_name: req.body.customer_name
			},
			{
				where: {
					id: req.params.id
				}
			}).then(function(dbCustomer) {
				db.Burger.update(
				{
					devoured: true
				},
		    {
		      where: {
		        id: req.params.id
		      }
		  	}).then(function(dbBurger) {

					res.redirect("/");

				});
			});
	});
});

module.exports = router;