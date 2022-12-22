// Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
// arrayLessThan100([5, 57]) ➞ true

// arrayLessThan100([77, 30]) ➞ false

// arrayLessThan100([0]) ➞ true
// Notes
// N/A

function arrayLessThan100(arr) {
    let sum = arr[0]
    for (i = 0; i < arr.length; i++) {

        sum += arr[i]
    }

    return (sum <= 100) ? true : false;
    // return arr.reduce((a, b) => (a + b <= 100));

}

console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([77, 30]));
console.log(arrayLessThan100([0]));
