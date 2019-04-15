var express = require("express");

var express = require("express");

var data = require("./data");

var app = express();

var PORT = process.env.PORT || 3001;

var bodyParser = require("body-parser");

var handlebars = require("handlebars");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

object1 = {
  name: "Charlie Sheen",
  image: "assets/Charlie_Sheen_2012.jpg",
  answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
};

object2 = {
  name: "Daniel Craig",
  image: "assets/Daniel_Craig_2,_2012.jpg",
  answers: [5, 5, 5, 5, 5, 5, 5, 5, 4, 5]
};

object3 = {
  name: "Jennifer Lopez",
  image: "assets/JLo.jpg",
  answers: [3, 3, 3, 3, 3, 3, 3, 3, 4, 3]
};

var array = [object1, object2, object3];

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
  var closestMatch = data.getDifference(newObject, array);
  array = closestMatch.array;

  res.render("return", closestMatch.match);
  // res.send(
  //   "Congratulations! Your best match is: " + closestMatch.match.name + "."
  // );
});
