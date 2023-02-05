// Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.


function societyName(arr) {

    return arr.map(elem => [...elem][0]).sort().join("");
}
console.log(societyName(["Adam", "Sarah", "Malcolm"]));

console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));

console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));