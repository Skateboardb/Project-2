var user_id = sessionStorage.userData;
// console.log(user_id);
var userData;

$.ajax("/api/users", {
	type: "GET",
	success: (req, res) => {
		for (let i = 0; i < req.length; i++) {
			if (req[i].id == user_id) {
				userData = req[i];
				break;
			}
		}
	},
	complete: () => {
		$.ajax("/api/beers", {
			type: "GET",
			success: (req, res) => {
				console.log(userData);
				switch (userData.rec_style1) {
					case "brown":
						console.log(req[0].description);
						$("#beer-style").text(req[0].style);
						$("#beer-description").text(req[0].description);
						break;
					case "ipa":
						console.log(req[1].description);
						$("#beer-style").text(req[1].style);
						$("#beer-description").text(req[1].description);
						break;
					case "pale":
						console.log(req[2].description);
						$("#beer-style").text(req[2].style);
						$("#beer-description").text(req[2].description);
						break;
					case "porter":
						console.log(req[3].description);
						$("#beer-style").text(req[3].style);
						$("#beer-description").text(req[3].description);
						break;
					case "stout":
						console.log(req[4].description);
						$("#beer-style").text(req[4].style);
						$("#beer-description").text(req[4].description);
						break;
					case "wheat":
						console.log(req[5].description);
						$("#beer-style").text(req[5].style);
						$("#beer-description").text(req[5].description);
						break;
					case "pils":
						console.log(req[6].description);
						$("#beer-style").text(req[6].style);
						$("#beer-description").text(req[6].description);
						break;
					case "bock":
						console.log(req[7].description);
						$("#beer-style").text(req[7].style);
						$("#beer-description").text(req[7].description);
						break;
					default:
						break;
				}
				if (userData.rec_style2) {
					$("#beer-alt").text(
						"If that doesn't sound like you, not to worry! \n We think you might also like a nice "
					);
					switch (userData.rec_style2) {
						case "brown":
							console.log(req[0].description);
							$("#beer-alt").append(req[0].style);
							$("#beer-style").text(req[0].style);
							$("#alt-desc").text(req[0].description);
							break;
						case "ipa":
							console.log(req[1].description);
							$("#beer-style").text(req[1].style);
							$("#alt-desc").text(req[1].description);
							break;
						case "pale":
							console.log(req[2].description);
							$("#beer-style").text(req[2].style);
							$("#alt-desc").text(req[2].description);
							break;
						case "porter":
							console.log(req[3].description);
							$("#beer-alt").append(req[3].style + ".");
							$("#beer-style").text(req[3].style);
							$("#alt-desc").text(req[3].description);
							break;
						case "stout":
							console.log(req[4].description);
							$("#beer-style").text(req[4].style);
							$("#alt-desc").text(req[4].description);
							break;
						case "wheat":
							console.log(req[5].description);
							$("#beer-style").text(req[5].style);
							$("#alt-desc").text(req[5].description);
							break;
						case "pils":
							console.log(req[6].description);
							$("#beer-style").text(req[6].style);
							$("#alt-desc").text(req[6].description);
							break;
						case "bock":
							console.log(req[7].description);
							$("#beer-style").text(req[7].style);
							$("#alt-desc").text(req[7].description);
							break;
						default:
							break;
					}
				}
				console.log(req);
			}
		});
	}
	// data: {
	// 	id: user_id
	// }
}).then(function(req, res) {
	// console.log(req);
});
