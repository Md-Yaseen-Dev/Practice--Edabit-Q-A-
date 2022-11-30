// Learn Lodash: _.fill, Fill an Array With New Values
// According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.
// Examples
// var array = [1, 2, 3]

// fill(array, "a") ➞ ["a", "a", "a"]

// fill(Array(3), 2) ➞ [2, 2, 2]

// fill([4, 6, 8, 10], "*", 1, 3) ➞ [4, "*", "*", 10]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

function fill(arr, value, start = 0, end = arr.length) {

    return arr.fill(value, start, end);
}
var arr = [1, 2, 3];
console.log(fill(arr, "a"));
console.log(fill(Array(3), 2));
console.log(fill([4, 6, 8, 10], "*", 1, 3));