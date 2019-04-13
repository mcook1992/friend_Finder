var express = require("express");

var express = require("express");

var data = require("./data");

var app = express();

var PORT = process.env.PORT || 3001;

var bodyParser = require("body-parser");

var array = [];

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
      parseInt(req.body.q1),
      parseInt(req.body.q2),
      parseInt(req.body.q3),
      parseInt(req.body.q4),
      parseInt(req.body.q5),
      parseInt(req.body.q6),
      parseInt(req.body.q7),
      parseInt(req.body.q8),
      parseInt(req.body.q9),
      parseInt(req.body.q10)
    ]
  };
  var closestMatch = data.getDifference(newObject);
  res.send("Congratulations! Your best match is: " + closestMatch.name + ".");
});
