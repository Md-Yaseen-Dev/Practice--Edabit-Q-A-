// Remove Null from an Array
// Create a function to remove all null values from an array.

// Examples
// removeNull(["a", null, "b", null]) ➞ ["a", "b"]

// removeNull([null, null, null, null, null]) ➞ []

// removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
// Notes
// N/A

function removeNull(arr) {

    return arr.filter(elem => elem != null);
}
console.log(removeNull(["a", null, "b", null]));
console.log(removeNull([null, null, null, null, null]));
console.log(removeNull([7, 8, null, 9]));