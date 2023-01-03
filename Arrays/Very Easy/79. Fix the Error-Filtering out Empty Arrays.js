// Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// // What I want:
// removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
// removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]

// // What I am getting:
// removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
// removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
// Notes
// N/A

function removeEmptyArrays(arr) {
    return arr.filter(x => x != 0)
}

console.log(removeEmptyArrays(["a", "b", []]));
console.log(removeEmptyArrays([1, 2, [], 4]));
