module.exports = function(sequelize, DataTypes) {
	var questionanswers = sequelize.define(
		"questionanswers",
		{
			question: {
				type: DataTypes.STRING
			},
			a1: { type: DataTypes.STRING },
			a2: { type: DataTypes.STRING },
			a3: { type: DataTypes.STRING },
			a4: { type: DataTypes.STRING },
			a5: { type: DataTypes.STRING }
		},

		{
			timestamps: false
		}
	);

	return questionanswers;
};
