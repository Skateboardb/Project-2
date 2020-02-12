module.exports = function(sequelize, DataTypes) {
	var questions = sequelize.define(
		"questions",
		{
			question: { type: DataTypes.STRING }
		},
		{
			timestamps: false
		}
	);
	return questions;
};
