// Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples
// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]
// Notes
// You can expect valid strings for all test cases.

function isFourLetters(arr) {

    return arr.filter(elem => elem.length == 4);
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]) );
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) );