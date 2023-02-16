// Check String for Spaces
// Create a function that returns true if a string contains any spaces.

// Examples
// hasSpaces("hello") ➞ false

// hasSpaces("hello, world") ➞ true

// hasSpaces(" ") ➞ true

// hasSpaces("") ➞ false

// hasSpaces(",./!@#") ➞ false
// Notes
// An empty string does not contain any spaces.
// Try doing this without RegEx.


function hasSpaces(str) {

    return str.includes(" ")

}
console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
console.log(hasSpaces(" "));
console.log(hasSpaces("") );
console.log( hasSpaces(",./!@#"));