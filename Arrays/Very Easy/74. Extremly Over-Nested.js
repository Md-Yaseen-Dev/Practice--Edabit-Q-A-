// Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

// deNest([[[[[[[true]]]]]]]) ➞ true

// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
// Notes
// You only need to retrieve one element.

function deNest(arr){

    return arr.flat(Infinity).toString()
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));
console.log( deNest([[[[[[[true]]]]]]]));
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));