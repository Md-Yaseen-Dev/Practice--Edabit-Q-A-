// String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
// intToString(4) ➞ "4"

// stringToInt("4") ➞ 4

// intToString(29348) ➞ "29348"
// Notes
// You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.

function intToString(num) {

    return String(num);
}
console.log(intToString(4));
console.log(intToString(29348));



function stringToInt(str) {

    return Number(str)
}
console.log(stringToInt("4"));


