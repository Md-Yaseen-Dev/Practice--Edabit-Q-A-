// Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

// lastItem([]) ➞ undefined
// Notes
// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.
// Make a tag suggestion.

function lastItem(input) {



    return (input.length == 0) ? undefined : input.slice(-1).toString();

}
console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));
console.log(lastItem("The quick brown fox jumped over the lazy dog"));
console.log(lastItem([]));