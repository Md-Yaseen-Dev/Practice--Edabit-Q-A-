// Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// Examples
// nextElement([3, 5, 7, 9]) ➞ 11

// nextElement([-5, -6, -7]) ➞ -8

// nextElement([2, 2, 2, 2, 2]) ➞ 2
// Notes
// All input arrays will contain integers only.

function nextElement(arr) {

    let diff = 0;
    for (i = 0; i < arr.length; i++) {

        diff = arr[i] - arr[i - 1];

    }

    return arr[arr.length - 1] + diff;
}
console.log(nextElement([3, 5, 7, 9]));
console.log(nextElement([-5, -6, -7]));
console.log(nextElement([2, 2, 2, 2, 2]));