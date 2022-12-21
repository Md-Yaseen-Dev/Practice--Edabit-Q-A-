// Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
// outlierNumber([2, 3, 4]) ➞ 3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.

// outlierNumber([1, 2, 3]) ➞ 2

// outlierNumber([4, 1, 3, 5, 9]) ➞ 4
// Notes
// Array size will always be >= 3.

function outlierNumber(arr) {

    const evenFilter = arr.filter(elem => elem % 2 == 0);
    const oddFilter = arr.filter(elem => elem % 2 !== 0);

    return (evenFilter.length == 1) ? evenFilter.toString() : oddFilter.toString();
}
console.log(outlierNumber([2, 3, 4]));
console.log(outlierNumber([1, 2, 3]));
console.log(outlierNumber([4, 1, 3, 5, 9]));