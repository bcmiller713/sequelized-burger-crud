# Burger Time

Burger Time is a proof-of-concept CRUD project for learning the basics of MySQL with Sequelize. Users can create burgers by entering the name of a burger into the text field. This creates a burger entry in the MySQL database. Then, users can fill in the customer name next to their newly created burger and "eat" their burger. This creates a customer entry in the MySQL database that is joined to the specific burger. This app uses Node/Express for the server and routing, MySQL/Sequelize for the database and models, & Handlebars for the layout and views.

[Live Demo](https://sequelized-burger-crud.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. I will assume that you already have [Node.js](https://nodejs.org/en/) and [MySQL](https://www.mysql.com/) installed locally. See deployment for notes on how to deploy the project on a live system.

1.  Install dependencies
2.  Sequelize setup
3.  In your CLI, go to the root of your project directory and enter **node server.js**
4.  In your browser, navigate to **http://localhost:8080**

### Dependencies

You will need to npm install the following node modules:

1.  express
2.  express-handlebars
3.  method-override
4.  body-parser
5.  mysql2
6.  sequelize

Since we have included a package.json file, you do not need to install dependencies by name. Simply run the following in the root of your directory:

```
npm install
```

### Sequelize setup

Initialize your sequelize app by entering the following command in your CLI:
```
sequelize init:config init:models
```
This will generate a config folder including a config.json file. Ensure that the contents of the "development" object match the details of your local mysql database.

## Deployment

Follow these instructions to deploy your app live on Heroku

* Create a heroku app in your project directory
```
heroku create <projectName>
```
* Provision JawsDB MySQL add-on for your project
```
heroku addons:create jawsdb
```
* Go back to your config.json file and replace the contents of the "production" object with the details of your JawsDB database.
* Create a new connection to MySQL using your JawsDB connection info. Manually create the tables that you will need to store data.

Now your project should be successfully deployed on heroku with a functioning database.

## Screenshots

**After burgers are created, they can be eaten by a specific person**

![screenshot-1](https://i.imgur.com/ZBHCG1b.png)
