var express = require("express");

var express = require("express");

var data = require("./data");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3001;

var bodyParser = require("body-parser");

//allowing myself to use images etc?

// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "../public/")));
var handlebars = require("handlebars");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

object1 = {
  name: "Charlie Sheen",
  image: "/Charlie_Sheen_2012.jpg",
  answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};

object2 = {
  name: "Daniel Craig",
  image: "/Daniel_Craig_2,_2012.jpg",
  answers: [5, 5, 5, 5, 5, 5, 5, 5, 4, 5],
};

object3 = {
  name: "Jennifer Lopez",
  image: "/JLo.jpg",
  answers: [3, 3, 3, 3, 3, 3, 3, 3, 4, 3],
};

var array = [object1, object2, object3];

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static("public"));

//setting up the listener

app.listen(PORT, function () {});

app.get("/", function (req, res) {
  res.sendfile("index.html");
});

app.get("/index.html", function (req, res) {
  res.sendfile("index.html");
});

app.get("/survey", function (req, res) {
  res.sendfile("survey.html");
});

app.get("/survey.html", function (req, res) {
  res.sendfile("survey.html");
});

app.post("/api/friends", function (req, res) {
  console.log("Logging the post request");

  //making an object of the user's answers to compare to other users
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
      parseInt(req.body.q10),
    ],
  };

  //if the user provides an image link, add that image link to the user's profile object
  if (req.body.image) {
    newObject.image = req.body.image;
  } else {
    newObject.image = "/profileIMG.jpg";
  }

  var closestMatch = data.getDifference(newObject, array);
  array = closestMatch.array;

  res.render("return", closestMatch.match);
  // res.send(
  //   "Congratulations! Your best match is: " + closestMatch.match.name + "."
  // );
});
