const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {

	db.Burger.findAll({
		include: [ db.Customer ]
	}).then( (dbBurger) => {

		res.render("index", {burgers: dbBurger});

	});
});

router.post("/", (req, res) => {

	db.Customer.create({
		customer_name: "placeholder"
	}).then( (dbCustomer) => {

		db.Burger.create({
			burger_name: req.body.name,
			devoured: req.body.devoured,
			CustomerId: dbCustomer.dataValues.id
		}).then( (dbBurger) => {

				res.redirect("/");

		});
	});


});

router.put("/:id", function(req, res) {

	db.Burger.findAll({
		include: [ db.Customer ]
	}).then( (results) => {
		
		db.Customer.update(
			{
				customer_name: req.body.customer_name
			},
			{
				where: {
					id: req.params.id
				}
			}).then( (dbCustomer) => {
				db.Burger.update(
				{
					devoured: true
				},
		    {
		      where: {
		        id: req.params.id
		      }
		  	}).then( (dbBurger) => {

					res.redirect("/");

				});
			});
	});
});

module.exports = router;