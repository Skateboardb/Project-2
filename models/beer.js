module.exports = function(sequelize, DataTypes) {
	var beer = sequelize.define(
		"beer",
		{
			style: { type: DataTypes.STRING, allowNull: false },
			description: { type: DataTypes.TEXT, allowNull: false }
		},
		{
			timestamps: false
		}
	);
	return beer;
};
