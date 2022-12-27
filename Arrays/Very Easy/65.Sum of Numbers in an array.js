// Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
// arraySum([1, 3, 3, 1, 10]) ➞ 105.46

// arraySum([2, 3, 4, 5]) ➞ 23.97

// arraySum([1, 31, 3, 11, 0]) ➞ 11.62
// Notes
// No empty array in Tests.
// Each array element ≥ 0.

function arraySum(arr) {

    const evenNumber = arr.filter(elem => elem % 2 == 0);
    const oddNumber = arr.filter(elem => elem % 2 !== 0);
    const evensqrt = evenNumber.map(elem => Math.pow(elem, 2));
    const oddsqrt = oddNumber.map(elem => Math.sqrt(elem));

    // const even = evensqrt.reduce((a, b) => a + b);
    // const odd = oddsqrt.reduce((a, b) => a + b);


    const concatArr = evensqrt.concat(oddsqrt);

    const RoundedArr = concatArr.reduce((a, b) => a + b);

    return RoundedArr.toFixed(2);




};

console.log(arraySum([2, 4, 9]));
console.log(arraySum([1, 3, 3, 1, 10]));
console.log(arraySum([1, 31, 3, 11, 0]))