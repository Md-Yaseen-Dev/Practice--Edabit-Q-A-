// Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

// findBob(["Jimmy", "Layla", "James"]) ➞ -1
// Notes
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

function findBob(arr) {

    return arr.indexOf("Bob");
}

console.log(findBob(["Jimmy", "Layla", "Bob"]));
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));
console.log(findBob(["Jimmy", "Layla", "James"]));

