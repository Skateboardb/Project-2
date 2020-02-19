module.exports = function(sequelize, DataTypes) {
	var users = sequelize.define(
		"users",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
			// user_first: { type: DataTypes.STRING },
			// user_last: { type: DataTypes.TEXT },
			// rec_style1: DataTypes.STRING,
			// rec_style2: DataTypes.STRING,
			user_email: DataTypes.STRING,
			user_pass: DataTypes.STRING
		},
		{
			timestamps: false
		}
	);
	return users;
};