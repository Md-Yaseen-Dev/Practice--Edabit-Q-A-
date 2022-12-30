// Even and Last
// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

// Examples
// evenLast([2, 3, 4, 5]) ➞ 30
// // numbers at even index = 2, 4
// // number at last index = 5
// // 2*5 + 4*5 = 10 + 20 = 30

// evenLast([1, 3, 3, 1, 10]) ➞ 140

// evenLast([]) ➞ 0
// Notes
// N/A

function evenLast(arr) {
    let newArr = []
    for (i = 0; i < arr.length - 1; i++) {

        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }

    return (newArr != 0) ? newArr.reduce((a, b) => a * (arr[arr.length - 1]) + b * (arr[arr.length - 1])) : 0;

    // return (newArr == 0) ? 0 : newArr.reduce((a, b) => a * (arr[arr.length - 1]) + b * (arr[arr.length - 1]));
}

console.log(evenLast([2, 3, 4, 5]));
console.log(evenLast([1, 3, 3, 1, 10]));
console.log(evenLast([]));