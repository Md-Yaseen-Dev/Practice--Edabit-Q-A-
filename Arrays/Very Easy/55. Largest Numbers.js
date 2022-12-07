// Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
// largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

// largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

// largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

// largestNumbers(0, [1, 3, 4, 2]) ➞ []
// Notes
// The returned array must be sorted in ascending order.


function largestNumbers(n, arr) {


    // let bignum = arr[0];

    // for (let i = 1; i < arr.length; i++) {

    //     if (bignum < arr[i]) {
    //         bignum = arr[i];
    //     }

    // }

    // return bignum
    

    const smallTobig=  arr.sort((a, b) => { return b-a}).slice(0, n)

    return smallTobig.reverse()

}
console.log(largestNumbers(2, [4, 3, 2, 1]));
console.log(largestNumbers(1, [7, 19, 4, 2]));
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));
console.log(largestNumbers(0, [1, 3, 4, 2]))


