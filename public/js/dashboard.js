var user_id = sessionStorage.userData;
// console.log(user_id);
var userData;

$.ajax("/api/users", {
	type: "GET",
	success: (req, res) => {
		for (let i = 0; i < req.length; i++) {
			if (req[i].id == user_id) {
				// console.log(req[i]);
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
						break;
					case "ipa":
						console.log(req[1].description);
						break;
					case "pale":
						console.log(req[2].description);
						break;
					case "porter":
						console.log(req[3].description);
						break;
					case "stout":
						console.log(req[4].description);
						break;
					case "wheat":
						console.log(req[5].description);
						break;
					case "pils":
						console.log(req[6].description);
						break;
					case "bock":
						console.log(req[7].description);
						break;
					default:
						break;
				}
			}
		});
	}
	// data: {
	// 	id: user_id
	// }
}).then(function(req, res) {
	// console.log(req);
});
