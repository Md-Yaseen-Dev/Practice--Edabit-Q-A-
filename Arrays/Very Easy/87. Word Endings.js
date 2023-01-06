// Word Endings
// Create a function that adds a string ending to each member in an array.

// Examples
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]

// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function addEnding(arr, ending) {

    let newArr = [];
    arr.forEach(elem => newArr.push(elem + ending));

    // return arr.map(elem => elem + ending)

    return newArr;
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(addEnding(["new", "pander", "scoop"], "er"));
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));