module.exports = (sequelize, DataTypes) => {

  let Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = (models) => {
    // Associating Burger with Customer
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Burger;
  
};
