// Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
// firstLast("ganesh") ➞ "gh"

// firstLast("kali") ➞ "ki"

// firstLast("shiva") ➞ "sa"

// firstLast("vishnu") ➞ "vu"

// firstLast("durga") ➞ "da"
// Notes
// There is no empty string.


function firstLast(str) {
    return str.charAt(0) + str.charAt(str.length - 1);

}
console.log(firstLast("ganesh"));
console.log(firstLast("kali"));
console.log(firstLast("shiva"));
console.log(firstLast("vishnu"));
console.log(firstLast("durga"));