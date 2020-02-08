module.exports = function(sequelize, DataTypes) {
  var beer = sequelize.define("beer", {
    style: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    timestamps: false
  });
  return beer;
};
