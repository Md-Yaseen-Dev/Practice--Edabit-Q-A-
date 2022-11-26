// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.

function toNumberArray(arr) {

 return arr.map(element =>parseFloat( element));



    // return arr.map(element => (+element)); // by using unary operator u can change to numbers i.e + symbol

    // return arr.map(element => Number(element));  // u can by using number too
}

console.log(toNumberArray(["9.4", "4.2"]))

console.log(toNumberArray(["91", "44"]))

console.log(toNumberArray(["9.5", "8.8"]))
