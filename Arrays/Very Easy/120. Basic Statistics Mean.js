// Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

// Examples
// mean([1, 6, 6, 7, 8, 8, 9, 10, 10]) ➞ 7.2

// mean([1, 3, 8, 9, 9, 10]) ➞ 6.7

// mean([2, 3, 3, 6, 6, 8, 9, 10]) ➞ 5.9
// Notes
// N/A

function mean(arr) {

    // return (arr.reduce((a, b) => a + b) / arr.length).toFixed(1);
    return (arr.reduce((a, b) => a + b) / arr.length).toPrecision(1);

}

console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10]));
console.log(mean([1, 3, 8, 9, 9, 10]));
console.log(mean([2, 3, 3, 6, 6, 8, 9, 10]));