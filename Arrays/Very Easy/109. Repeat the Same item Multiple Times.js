// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// Examples
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]

// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

// repeat("7", 2) ➞ ["7", "7"]

// repeat(0, 0) ➞ []
// Notes
// item can be either a string or a number.
// times will always be a number.

function repeat(str, n) {

    const newArr = []
    for (let i = 0; i < n; i++) {

         newArr.push(str);
    }
    return newArr;

    // return newArr.fill(newArr.push(str),0,n);
}
console.log(repeat("Edabit", 3));
console.log(repeat(13, 5));
console.log(repeat(0, 0));