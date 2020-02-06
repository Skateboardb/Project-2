module.exports = function(sequelize, DataTypes) {
    var beer = sequelize.define("Example", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return beer;
  };