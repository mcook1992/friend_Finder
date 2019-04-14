//the var we'll use to store cloest match
var closestMatch;

//just for testing right now

var randomNumber = Math.floor(Math.random() * 5);

console.log(randomNumber);

newObject = {
  name: "NewObject",
  image: "link",
  answers: [
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber,
    randomNumber
  ]
};

// getDifference(newObject);

function getDifference(responseObject) {
  //seeding some initial values into the array
  object1 = {
    name: "Charlie Sheen",
    image: "link",
    answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  };

  object2 = {
    name: "James Bond",
    image: "link",
    answers: [5, 5, 5, 5, 5, 5, 5, 5, 4, 5]
  };

  object3 = {
    name: "Jennifer Lopez",
    image: "link",
    answers: [3, 3, 3, 3, 3, 3, 3, 3, 4, 3]
  };

  var array = [object1, object2, object3];

  //sum of all the answers on the person we're comparing everything else to
  var currentSum;
  //the array we'll use to compare different scores
  var comparisonDifferenceArray = [];

  currentSum = responseObject.answers.reduce((a, b) => a + b, 0);
  console.log(currentSum);

  //including the minus one since the current response we're comparing the rest of the array to is the last value

  for (var i = 0; i < array.length; i++) {
    var comparisonSum = array[i].answers.reduce((a, b) => a + b, 0);
    var difference = Math.abs(comparisonSum - currentSum);
    console.log(difference);
    comparisonDifferenceArray.push(difference);
    console.log(comparisonDifferenceArray);
  }

  var currentClosestNumber = 200;
  //tracker variable
  var i = 0;

  comparisonDifferenceArray.forEach(function(element) {
    // var difference = Math.abs(element - currentSum);
    // console.log("The difference is: " + difference);

    //if the score is closer to the number than the current cloest match
    if (element < currentClosestNumber) {
      console.log("We're in the if statement");
      currentClosestNumber = element;
      closestMatch = array[i];
    }

    i++;
  });

  console.log(closestMatch.name);
  array.push(responseObject);
  return closestMatch;
  // compareData();
}

// function compareData() {
//   var currentClosestNumber = 100;
//   //tracker variable
//   var i = 0;

//   comparisonDifferenceArray.forEach(function(element) {
//     var difference = Math.abs(element - currentSum);
//     console.log("The difference is: " + difference);

//     //if the score is closer to the number than the current cloest match
//     if (difference < currentClosestNumber) {
//       console.log("We're in the if statement");
//       currentClosestNumber = difference;
//       closestMatch = array[i];
//     }

//     i++;
//   });

//   console.log("The closest match is: " + closestMatch.name);
// }

module.exports = {
  getDifference: getDifference
};
