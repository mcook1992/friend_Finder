var express = require("express");

var express = require("express");

var data = require("./data");

var app = express();

var PORT = 3000;

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static("public"));

//setting up the listener

app.listen(PORT, function() {
  console.log("Listening on port http://localhost:" + PORT);
});

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.get("/survey", function(req, res) {
  res.sendfile("survey.html");
});

app.post("/api/friends", function(req, res) {
  console.log("Logging the post request");

  console.log(req.body);

  var newObject = {
    name: req.body.firstname,
    answers: [
      req.body.q1,
      req.body.q2,
      req.body.q3,
      req.body.q4,
      req.body.q5,
      req.body.q6,
      req.body.q7,
      req.body.q8,
      req.body.q9,
      req.body.q10
    ]
  };
  var closestMatch = data.getDifference(newObject);
  res.send("Congratulations! Your best match is: " + closestMatch.name + ".");
});
