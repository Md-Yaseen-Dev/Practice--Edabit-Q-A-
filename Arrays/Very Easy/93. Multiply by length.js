// Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.

// Examples
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

// multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])

// multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]

// multiplyByLength([0]) ➞ ([0])
// Notes
// All of the values given are numbers.
// All arrays will have at least one element.
// Don't forget to return the result.

function multiplyByLength(arr) {

    return arr.map(elem => elem * arr.length);
}
console.log(multiplyByLength([2, 3, 1, 0]));
console.log(multiplyByLength([4, 1, 1]));
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));