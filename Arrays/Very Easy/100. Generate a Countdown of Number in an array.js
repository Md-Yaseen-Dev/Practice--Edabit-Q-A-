// Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0];

// countdown(1) ➞ [1, 0];

// countdown(0) ➞ [0];
// Notes
// The argument will always be greater than or equal to zero.


function countdown(count) {

    let newArr = []

    for (let i = count; i >= 0; i--) {

        newArr.push(i)

    }

    return newArr;

    // return Array.from()

}
console.log(countdown(5));
console.log(countdown(1));
console.log(countdown(0));
