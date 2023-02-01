// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0
// Notes
// If given an empty array, return 0.



function sumOfCubes(arr) {


    // return arr.map(elem => elem * elem * elem).reduce((a, b) => a + b)
    // return arr.map(elem => Math.pow(elem, 3)).reduce((a, b) => a + b, 0);

    return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0)

}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));