
// Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
// cleanUpArray(["8"]) ➞ [[8], []]

// cleanUpArray(["11"]) ➞ [[], [11]]

// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]
// Notes
// All numbers will be positive integers.
// function cleanUpArray(arr) {

//     var a = arr.map(Number);
//     for (i = 0; i < arr.length; i++) {

//         if (a % 2 == 0) {
//             arr[0] = a;

//         } else{
//         arr[0] = [];
//     }

//         if (a % 2 !== 0) {

//             arr[1] = a;

//         } else {

//             arr[1] = [];

//         }

//     }
//         return arr

// // }
// console.log(cleanUpArray(["8"]));
// console.log(cleanUpArray(["11"]));
// console.log(cleanUpArray(["7", "4", "8"]));
// console.log(cleanUpArray(["9", "4", "5" ,"8"]));
// function cleanUpArray(arr) {

//     var a = arr.map(Number)
//     var c = a.map(element => (element % 2 !== 0) ? []: element);
//     return c;
// }


function cleanUpArray(arr) {
    var x = arr.map(Number);
    var a = x.filter((element) => (element % 2 == 0));
    var b = x.filter((element) => (element % 2 !== 0));

    return [a, b];
}
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));