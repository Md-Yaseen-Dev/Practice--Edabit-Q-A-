// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// Notes
// N/A

// function arrayToString(Array) {

//     return Array.toString();
//  }

// const a  = arrayToString([1,2,3,4,5]);

// console.log(a);
// console.log(typeof a);

// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));


function arrayToString(arr) {

    return arr.join("");
}

const obj = arrayToString([1, 2, 3, 4, 5]);

console.log(typeof obj);
console.log(obj);

console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
