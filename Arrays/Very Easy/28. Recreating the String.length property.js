
// Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16
// Notes
// N/A

function length(s) {

    var length = 0;
    while (s[length] !== undefined) {

        length++
    }
    return length
}

console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("Wash your hand"));
