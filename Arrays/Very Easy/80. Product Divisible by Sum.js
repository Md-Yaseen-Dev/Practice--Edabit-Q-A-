// Product Divisible by Sum?
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
// divisible([3, 2, 4, 2]) ➞ false

// divisible([4, 2, 6]) ➞ true
// // 4 * 2 * 6 / (4 + 2 + 6)

// divisible([3, 5, 1]) ➞ false
// Notes
// N/A

function divisible(arr) {

    let product = arr.reduce((a, b) => a * b);
    let sum = arr.reduce((a, b) => a + b);

    return (product % sum == 0);
}
console.log(divisible([3, 2, 4, 2]));
console.log(divisible([4, 2, 6]));
console.log(divisible([3, 5, 1]));