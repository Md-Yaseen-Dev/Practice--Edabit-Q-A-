// Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412
// Notes
// Each array element is greater than 0.

function findDifference(arr1, arr2) {

    arr1 = arr1.reduce((element1, element2) => element1 * element2);
    arr2 = arr2.reduce((element1, element2) => element1 * element2);   //check once ??

    return Math.abs( arr2-arr1);

}

console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]));

console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) );

console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]));

console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]));