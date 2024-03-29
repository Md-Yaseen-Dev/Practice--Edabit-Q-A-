// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0
// Notes
// Check the Resources tab for info on recursion.

function length(str) {

    // return str.length ;  it is not possible for recursion

    if (str == "") return 0;

    return 1 + length(str.slice(1))
}
console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));