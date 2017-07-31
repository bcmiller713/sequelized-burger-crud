var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(obj) {
  var arr = [];

  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push(key + "=" + obj[key]);
    }
  }

  return arr.toString();
}

var orm = {
	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM " + table + ";";
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	insertOne: function(table, columns, values, callback) {
		var queryString = "INSERT INTO " + table +
		" (" + columns.toString() + ") VALUES (" +
		printQuestionMarks(values.length) + ")";
		console.log(queryString);
		connection.query(queryString, values, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	updateOne: function(table, objColVals, condition, callback) {
		var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	}
};

module.exports = orm;