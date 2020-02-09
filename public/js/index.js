// Get references to page elements
var $beerText = $("#beer-text");
var $beerDescription = $("#beer-description");
var $submitBtn = $("#submit");
var $beerList = $("#beer-list");

// The API object contains methods for each kind of request we'll make
var API = {
  savebeer: function(beer) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/Beer",
      data: JSON.stringify(beer)
    });
  },
  getBeer: function() {
    return $.ajax({
      url: "api/Beer",
      type: "GET"
    });
  },
  deleteBeer: function(id) {
    return $.ajax({
      url: "api/Beer/" + id,
      type: "DELETE"
    });
  }
};

// refreshbeer gets new beer from the db and repopulates the list
var refreshBeer = function() {
  API.getBeer().then(function(data) {
    var $Beer = data.map(function(beer) {
      var $a = $("<a>")
        .text(beer.text)
        .attr("href", "/beer/" + beer.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": beer.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $beerList.empty();
    $beerList.append($Beer);
  });
};

// handleFormSubmit is called whenever we submit a new beer
// Save the new beer to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var beer = {
    text: $beerText.val().trim(),
    description: $beerDescription.val().trim()
  };

  if (!(beer.text && beer.description)) {
    alert("You must enter an beer text and description!");
    return;
  }

  API.savebeer(beer).then(function() {
    refreshbeer();
  });

  $beerText.val("");
  $beerDescription.val("");
};

// handleDeleteBtnClick is called when an beer's delete button is clicked
// Remove the beer from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletebeer(idToDelete).then(function() {
    refreshbeer();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$beerList.on("click", ".delete", handleDeleteBtnClick);

