//the var used to store cloest match
var closestMatch;

//function we'll use to compare the user response to "celebrity profiles" along with the profiles of other users who have completed the array. The initial array consists of objects. Each object is a profile of either a celebrity or another user.
function getDifference(responseObject, initialArray) {
  //sum of all the answers on the person we're comparing everything else to
  var currentSum;

  //the array we'll use to compare different scores
  var comparisonDifferenceArray = [];

  //the magic formula that generates user scores! Love is in the air.
  currentSum = responseObject.answers.reduce((a, b) => a + b, 0);

  //In this for loop, we'll compare the user's love score to all the scores of all the other users on the site and create an array of the differences between the two scores

  for (var i = 0; i < initialArray.length; i++) {
    var comparisonSum = initialArray[i].answers.reduce((a, b) => a + b, 0);

    var difference = Math.abs(comparisonSum - currentSum);

    comparisonDifferenceArray.push(difference);
  }

  //an arbitrary number to start with before we compare user scores to the scores of celebrity users and other profiles.
  var currentClosestNumber = 200;

  //tracker variable
  var i = 0;

  //now we will compare the user score
  comparisonDifferenceArray.forEach(function (element) {
    //if the score is closer to the number than the current closest match, make a new closest match
    if (element < currentClosestNumber) {
      currentClosestNumber = element;
      closestMatch = initialArray[i];
    }

    i++;
  });

  initialArray.push(responseObject);
  return { match: closestMatch, array: initialArray };
}

//export the function so we can use it in the main server
module.exports = {
  getDifference: getDifference,
};
