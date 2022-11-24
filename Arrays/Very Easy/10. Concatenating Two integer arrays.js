// Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

// Notes
// Don't forget to return the result.
// See Resources tab for more info.

function concat(arr1, arr2) {

    return arr1.concat(arr2); // it will return new array with merging two arrays.
    // return arr1 + arr2 ;//this concat make 5 and 2 combine eachother and looks like 52.
}

console.log(concat([1, 3, 5,], [2, 6, 8]));

console.log(concat([7, 8], [10, 9, 1, 1, 2]));

console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));
