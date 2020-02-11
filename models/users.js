module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define(
		"users",
		{
			user_first: { type: DataTypes.STRING, allowNull: false },
			user_last: { type: DataTypes.TEXT, allowNull: false },
			rec_style: DataTypes.TEXT,
			user_email: DataTypes.TEXT
		},
		{
			timestamps: false
		}
	);
	return users;
};
