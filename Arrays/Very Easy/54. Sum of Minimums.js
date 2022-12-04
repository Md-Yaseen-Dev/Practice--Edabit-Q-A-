// Sum of Minimums
// Create a function that takes a 2D arr arr and returns the sum of the minimum value in each row.

// Examples
// sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]) ➞ 26

// // minimum value of the first row is 1
// // minimum value of the second row is 5
// // minimum value of the third row is 20
// Notes
// N/A


function sumMinimums(arr) {

    // let smallestnum = arr[0];

    // for (i = 1; i < arr.length; i++) {
    //     if (arr[i] < smallestnum) {
    //         smallestnum = arr[i]
    //     }
    // }
    // return smallestnum;    

    return arr.map(item => Math.min(...item));
}

console.log(sumMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100], [1, 2, 3]]));

