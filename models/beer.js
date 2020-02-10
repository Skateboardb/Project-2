var beerModel = function(sequelize, DataTypes) {
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

module.exports = beerModel;

// var questionModel = function(sequelize, DataTypes) {
// 	var questions = sequelize.define(
// 		"questions",
// 		{
// 			question: { type: DataTypes.STRING }
// 		},
// 		{
// 			timestamps: false
// 		}
// 	);
// 	return questions;
// };

// module.exports = questionModel;

// module.exports = function(sequelize, DataTypes) {
// 	var beer = sequelize.define(
// 		"beer",
// 		{
// 			style: { type: DataTypes.STRING, allowNull: false },
// 			description: { type: DataTypes.TEXT, allowNull: false }
// 		},
// 		{
// 			timestamps: false
// 		}
// 	);
// 	return beer;

// 	var questions = sequelize.define(
// 		"questions",
// 		{
// 			question: { type: DataTypes.STRING }
// 		},
// 		{
// 			timestamps: false
// 		}
// 	);
// 	return questions;

// 	var answers = sequelize.define(
// 		"answers",
// 		{
// 			question_id: {
// 				type: DataTypes.INTEGER,

// 				references: {
// 					model: "questions",
// 					key: "id"
// 				}
// 			},
// 			a1: { type: DataTypes.STRING },
// 			a2: { type: DataTypes.STRING },
// 			a3: { type: DataTypes.STRING },
// 			a4: { type: DataTypes.STRING },
// 			a5: { type: DataTypes.STRING }
// 		},

// 		{
// 			timestamps: false
// 		}
// 	);

// 	return answers;
// };

// module.exports = function(sequelize, DataTypes) {
// 	var questions = sequelize.define(
// 		"questions",
// 		{
// 			question: { type: DataTypes.STRING }
// 		},
// 		{
// 			timestamps: false
// 		}
// 	);
// 	return questions;
// };

// module.exports = function(sequelize, DataTypes) {
// 	var answers = sequelize.define(
// 		"answers",
// 		{
// 			question_id: {
// 				type: DataTypes.INTEGER,

// 				references: {
// 					model: "questions",
// 					key: "id"
// 				}
// 			},
// 			a1: { type: DataTypes.STRING },
// 			a2: { type: DataTypes.STRING },
// 			a3: { type: DataTypes.STRING },
// 			a4: { type: DataTypes.STRING },
// 			a5: { type: DataTypes.STRING }
// 		},

// 		{
// 			timestamps: false
// 		}
// 	);

// 	return answers;
// };

// module.exports = function(sequelize, DataTypes) {
// 	var beer = sequelize.define(
// 		"beer",
// 		{
// 			style: { type: DataTypes.STRING, allowNull: false },
// 			description: { type: DataTypes.TEXT, allowNull: false }
// 		},
// 		{
// 			timestamps: false
// 		}
// 	);
// 	return beer;
// };
