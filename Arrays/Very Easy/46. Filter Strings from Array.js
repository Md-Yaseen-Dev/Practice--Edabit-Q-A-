// Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []
// Notes
// N/A

function filterArray(arr){

    return arr.filter(element => Number.isInteger(element))
    
    // return arr.filter(element =>(typeof element === "number"));
}

console.log(filterArray([1,2,3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));