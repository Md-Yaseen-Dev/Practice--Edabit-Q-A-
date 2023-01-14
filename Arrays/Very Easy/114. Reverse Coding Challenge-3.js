// Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples
// [5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]

// [9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]

// [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

// [6, 1], 7 ➞ [6, 1]

// [3, 2, 9], 3 ➞ [0, 2, 0]ṇ

// [48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
// Notes
// If you get stuck, see Comments for a hint.

function mysteryfunc(arr, num) {


    return arr.map(elem => elem % num)

}
console.log(mysteryfunc([5, 7, 8, 2, 1], 2));
console.log(mysteryfunc([9, 8, 16, 47], 4));
console.log(mysteryfunc([17, 11, 99, 55, 23, 1], 5));
console.log(mysteryfunc([6, 1], 7));
console.log(mysteryfunc([3, 2, 9], 3));
console.log(mysteryfunc([48, 22, 0, 19, 33, 100], 10));
