var express = require("express");

var app = express();

var PORT = 3000;

//setting up the listener

app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});

//setting up the post request

app.post("/api/friends", function(req, res) {
  console.log("Logging the post request");
  console.log(req);

  //   res.send("We're registering this request");
});
