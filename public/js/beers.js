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
// var beerScore = {
// 	brown: 0,
// 	ipa: 0,
// 	pale: 0,
// 	porter: 0,
// 	stout: 0,
// 	wheat: 0,
// 	pils: 0,
// 	bock: 0
// };

var beerScore = [
	(brown = { score: 0 }),
	(ipa = { score: 0 }),
	(pale = { score: 0 }),
	(porter = { score: 0 }),
	(stout = { score: 0 }),
	(wheat = { score: 0 }),
	(pils = { score: 0 }),
	(bock = { score: 0 })
];

var highScore = [];
$(function() {
	$("button").on("click", function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		var data = [];

		$.each($("input:checked"), function() {
			data.push($(this).val());
		});
		console.log(data.join(", "));
		var brown = beerScore[0];
		var ipa = beerScore[1];
		var pale = beerScore[2];
		var porter = beerScore[3];
		var stout = beerScore[4];
		var wheat = beerScore[5];
		var pils = beerScore[6];
		var bock = beerScore[7];

		switch (data[0]) {
			case "q1a1":
				ipa.score++;

				break;

			case "q1a2":
				stout.score++;
				break;

			case "q1a3":
				brown.score++;
				break;

			case "q1a4":
				porter.score++;
				break;

			case "q1a5":
				pale.score++;
				break;
		}

		switch (data[1]) {
			case "q2a1":
				pils.score++;

				break;

			case "q2a2":
				ipa.score++;
				break;

			case "q2a3":
				wheat.score++;
				break;

			case "q2a4":
				bock.score++;
				brown.score++;
				break;

			case "q2a5":
				stout.score++;
				break;
		}

		switch (data[2]) {
			case "q3a1":
				stout.score++;

				break;

			case "q3a2":
				porter.score++;
				brown.score++;
				break;

			case "q3a3":
				bock.score++;
				wheat.score++;
				pale.score++;
				break;

			case "q3a4":
				ipa.score++;
				break;

			case "q3a5":
				pils.score++;
				break;
		}

		switch (data[3]) {
			case "q4a1":
				pale.score++;

				break;

			case "q4a2":
				ipa.score++;
				break;

			case "q4a3":
				brown.score++;
				break;

			case "q4a4":
				porter.score++;
				break;

			case "q4a5":
				stout.score++;
				break;
		}

		switch (data[4]) {
			case "q5a1":
				pale.score++;

				break;

			case "q5a2":
				wheat.score++;
				pils.score++;
				break;

			case "q5a3":
				brown.score++;
				break;

			case "q5a4":
				bock.score++;
				ipa.score++;
				break;

			case "q5a5":
				porter.score++;
				stout.score++;
				break;
		}

		console.log(beerScore);

		var highest = _.chain(beerScore)
			.keys()
			.sort()
			.last()
			.value();

		var beerSort = _.sortBy(beerScore, "");
		console.log(beerSort);
		// console.log(highest);
	});
});
