module.exports = function(sequelize, DataTypes) {
  
  var Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Customer.associate = function(models) {
    // Associating Customer with Burger
    Customer.hasMany(models.Burger);
  };

  return Customer;

};
