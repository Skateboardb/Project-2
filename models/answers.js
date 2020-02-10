module.exports = function(sequelize, DataTypes) {
	var answers = sequelize.define(
		"answers",
		{
			question_id: {
				type: DataTypes.INTEGER,

				references: {
					model: "questions",
					key: "id"
				}
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

	return answers;
};
