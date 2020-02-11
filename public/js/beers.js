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
$(function() {
	$("button").on("click", function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		var data = [];

		$.each($("input:checked"), function() {
			data.push($(this).val());
		});
		console.log(data.join(", "));
	});
});
