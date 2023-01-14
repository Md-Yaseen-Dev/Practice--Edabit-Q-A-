// Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// Examples
// existsHigher([5, 3, 15, 22, 4], 10) ➞ true

// existsHigher([1, 2, 3, 4, 5], 8) ➞ false

// existsHigher([4, 3, 3, 3, 2, 2, 2], 4)➞ true

// existsHigher([], 5) ➞ false
// Notes
// Return false for an empty array [].

function existsHigher(arr, num) {

    return arr.some(elem => elem >= num)
}
console.log(existsHigher([5, 3, 15, 22, 4], 10));
console.log(existsHigher([1, 2, 3, 4, 5], 8));
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
console.log(existsHigher([], 5));