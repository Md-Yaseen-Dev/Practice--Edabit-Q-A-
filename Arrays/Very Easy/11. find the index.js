// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.

function findIndex(arr,str){

    return arr.indexOf(str);
    // if use findindex we need function , here it says about the value.
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh") )

console.log( findIndex(["Red", "blue", "Blue", "Green"], "blue") );

console.log( findIndex(["a", "g", "y", "d"], "d") )