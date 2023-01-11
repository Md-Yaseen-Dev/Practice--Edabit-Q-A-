// Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// Examples
// nthSmallest([1, 3, 5, 7], 1) ➞ 1

// nthSmallest([1, 3, 5, 7], 3) ➞ 5

// nthSmallest([1, 3, 5, 7], 5) ➞ null

// nthSmallest([7, 3, 5, 1], 2) ➞ 3
// Notes
// n will always be >= 1.
// Each integer in the array will be distinct (there will be a clear ordering).
// Given an out of bounds parameter (e.g. an array is of size k), and you are asked to find the m > k smallest integer, return null.

function nthSmallest(arr, n) {

    let string = "null"

    for (i = 0; i <= n; i++) {

        if (arr[n]> arr[i]) {

            string = arr[i]
        }

    }
    return string;

}

console.log(nthSmallest([1, 3, 5, 7], 1));
console.log(nthSmallest([1, 3, 5, 7], 3));
console.log(nthSmallest([1, 3, 5, 7], 5));
console.log(nthSmallest([7, 3, 5, 1], 2));