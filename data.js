//the var we'll use to store cloest match
var closestMatch;

//just for testing right now

// getDifference(newObject);

function getDifference(responseObject, initialArray) {
  //seeding some initial values into the array

  //sum of all the answers on the person we're comparing everything else to
  var currentSum;
  //the array we'll use to compare different scores
  var comparisonDifferenceArray = [];

  currentSum = responseObject.answers.reduce((a, b) => a + b, 0);
  console.log(currentSum);

  //including the minus one since the current response we're comparing the rest of the array to is the last value

  for (var i = 0; i < initialArray.length; i++) {
    var comparisonSum = initialArray[i].answers.reduce((a, b) => a + b, 0);
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
      closestMatch = initialArray[i];
    }

    i++;
  });

  console.log(closestMatch.name);
  initialArray.push(responseObject);
  return { match: closestMatch, array: initialArray };
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
