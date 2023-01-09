// Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

// Examples
// firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

// firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

// firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]
// Notes
// Test input will always contain a minimum of two elements within the array.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function firstLast(arr) {

    // return [arr[0], arr[arr.length - 1]]
    // return [arr.shift() , arr.pop()];

    // return [arr.shift(), arr.reverse().shift()]

    let first = arr.slice(0, 1);
    let last = arr.slice(-1);

    return [...first , ...last];
}
console.log(firstLast([5, 10, 15, 20, 25]));
console.log(firstLast(["edabit", 13, null, false, true]));
console.log(firstLast([undefined, 4, "6", "hello", null]));