var user_id = sessionStorage.userData;
// console.log(user_id);
var userData;
$.ajax("/api/users", {
	type: "GET"
	// data: {
	// 	id: user_id
	// }
}).then(function(req, res) {
	// console.log(req);
	for (let i = 0; i < req.length; i++) {
		if (req[i].id == user_id) {
			// console.log(req[i]);
			userData = req[i];
			console.log(userData);
			break;
		}
	}
});
