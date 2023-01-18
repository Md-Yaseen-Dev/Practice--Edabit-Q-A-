// Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples
// findEvenNums(8) ➞ [2, 4, 6, 8]

// findEvenNums(4) ➞ [2, 4]

// findEvenNums(2) ➞ [2]
// Notes
// If there are no even numbers, return an empty array.

function findEvenNums(n) {

    let newArr = [];
    for (i = 2; i <= n; i = i + 2) {

        newArr.push(i)
    }
    return newArr;
}

console.log(findEvenNums(8));
console.log(findEvenNums(4));
console.log(findEvenNums(2));
