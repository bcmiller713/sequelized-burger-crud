module.exports = (sequelize, DataTypes) => {
  
  let Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Customer.associate = (models) => {
    // Associating Customer with Burger
    Customer.hasMany(models.Burger);
  };

  return Customer;

};
