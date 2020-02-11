module.exports = function(sequelize, DataTypes) {
    var UserResponses = sequelize.define("UserResponses", {
      beer_name: DataTypes.STRING,
      brewery: DataTypes.STRING,
      ibu: DataTypes.INTEGER
    });
    return UserResponses;
  };