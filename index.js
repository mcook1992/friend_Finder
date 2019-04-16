$("#submitButton").on("click", function() {
  console.log("Submit Button pressed");

  $.post("localhost:3000/api/friends", function() {
    console.log("We made it to the second function function");
  });
});

// $.ajax({
//   type: "POST", //rest Type
//   dataType: "jsonp", //mispelled
//   url: "http://localhost:3000/api/friends",
//   contentType: "application/json; charset=utf-8",
//   success: function(msg) {
//     console.log("Got the data!");
//   }
// }).then(function(response) {
//   console.log("In the then function");
// });
