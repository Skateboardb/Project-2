// beers Array
// [beer1: score,
// beer2: score,
// beer3:score]

// grab Element
// switch
//  data-value
//  case 1

//  beer1++

//  case 2

//  beer2 ++ && beer3 ++

// var styles = [

// ]
// alert("hello");
var beerScore = {
	brown: 0,
	ipa: 0,
	pale: 0,
	porter: 0,
	stout: 0,
	wheat: 0,
	pils: 0,
	bock: 0
};

var highScore = [];
$(function() {
	$("#surveySubmit").on("click", function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		var data = [];

		$.each($("input:checked"), function() {
			data.push($(this).val());
		});
		console.log(data.join(", "));

		switch (data[0]) {
			case "q1a1":
				beerScore.ipa++;

				break;

			case "q1a2":
				beerScore.stout++;
				break;

			case "q1a3":
				beerScore.brown++;
				break;

			case "q1a4":
				beerScore.porter++;
				break;

			case "q1a5":
				beerScore.pale++;
				break;
		}

		switch (data[1]) {
			case "q2a1":
				beerScore.pils++;

				break;

			case "q2a2":
				beerScore.ipa++;
				break;

			case "q2a3":
				beerScore.wheat++;
				break;

			case "q2a4":
				beerScore.bock++;
				beerScore.brown++;
				break;

			case "q2a5":
				beerScore.stout++;
				break;
		}

		switch (data[2]) {
			case "q3a1":
				beerScore.stout++;

				break;

			case "q3a2":
				beerScore.porter++;
				beerScore.brown++;
				break;

			case "q3a3":
				beerScore.bock++;
				beerScore.wheat++;
				beerScore.pale++;
				break;

			case "q3a4":
				beerScore.ipa++;
				break;

			case "q3a5":
				beerScore.pils++;
				break;
		}

		switch (data[3]) {
			case "q4a1":
				beerScore.pale++;

				break;

			case "q4a2":
				beerScore.ipa++;
				break;

			case "q4a3":
				beerScore.brown++;
				break;

			case "q4a4":
				beerScore.porter++;
				break;

			case "q4a5":
				beerScore.stout++;
				break;
		}

		switch (data[4]) {
			case "q5a1":
				beerScore.pale++;

				break;

			case "q5a2":
				beerScore.wheat++;
				beerScore.pils++;
				break;

			case "q5a3":
				beerScore.brown++;
				break;

			case "q5a4":
				beerScore.bock++;
				beerScore.ipa++;
				break;

			case "q5a5":
				beerScore.porter++;
				beerScore.stout++;
				break;
		}
		console.log(beerScore);
		var keyArray = Object.keys(beerScore);
		console.log(keyArray);
		var highest = 0;
		var key;
		var styleRec = [];
		for (let i = 0; i < keyArray.length; i++) {
			key = keyArray[i];
			if (beerScore[key] > highest) {
				highest = beerScore[key];
			}
		}
		for (let i = 0; i < keyArray.length; i++) {
			key = keyArray[i];
			if (beerScore[key] == highest) {
				styleRec.push(key);
				console.log(styleRec);
			}
		}

		var newRec = {
			rec_style1: styleRec[0],
			rec_style2: styleRec[1]
		};

		$.ajax("/api/users", {
			type: "POST",
			data: newRec
		}).then(function(data) {
			// Reload the page to get the updated list
			location.reload();
		});

		// var newStyle={
		// 	rec_style1:
		// }
		// $.ajax("api/users"),{
		// 	type: "POST",
		// 	data:
		// }
		// console.log("highest score: " + highest);

		// console.log(beerScore);
		// function choose(beerScore, x) {
		// 	if (beerScore[x] == highest) {
		// 		console.log(beerScore[x]);
		// 	}
		// }

		// find all keys where value == highest

		// var highest = _.min(beerScore, function(o) {
		// 	return o.val;
		// });
		// console.log(highest);
	});
});
