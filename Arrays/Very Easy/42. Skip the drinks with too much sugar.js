// Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
// Notes
// The function returns an array of strings.
// All drink names are in lowercase.


function skipTooMuchSugarDrinks(arr) {

    return arr.filter(element => element !== "fanta" && element !== "cola");  // check once
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log((skipTooMuchSugarDrinks(["lemonade", "beer", "water"])));
console.log((skipTooMuchSugarDrinks(["fanta", "cola"]) ));
