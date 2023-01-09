// Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.

// diffMaxMin([44, 32, 86, 19]) ➞ 67
// // Smallest number is 19, biggest is 86.
// Notes
// N/A

function diffMaxMin(arr) {

    // return Math.max(...arr) - Math.min(...arr);

    return Math.max.apply(Math, arr) - Math.min.apply(Math, arr);

}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));