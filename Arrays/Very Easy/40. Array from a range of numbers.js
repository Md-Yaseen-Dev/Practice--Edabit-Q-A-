// Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
// rangeOfNum(2, 4) ➞ [3]

// rangeOfNum(5, 9) ➞ [6, 7, 8]

// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]
// Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.

function rangeOfNum(start, end) {

    let arr = [];

    for (i = start; i < end; i++) {    // i dont think it is the right way of solving this challenge. but it matches.

        arr.push(start++);
    }
    arr.shift();
    return arr;
}
console.log(rangeOfNum(2, 4));
console.log(rangeOfNum(5, 9));
console.log(rangeOfNum(2, 11));
console.log(rangeOfNum(3, 3));
