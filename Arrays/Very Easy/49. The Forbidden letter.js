// The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false

// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

// forbiddenLetter("m", []) ➞ true
// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty arrays.

function forbiddenLetter(char, arr) {

    let forbidden = arr.every(element => (element.includes(char)));
    return forbidden
}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []) );