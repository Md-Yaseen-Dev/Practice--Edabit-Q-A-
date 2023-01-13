// State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full
// Examples
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
// ➞ ["CA", "NY"]

// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
// ➞ ["Arizona", "Nevada"]

// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
// ➞ ["MT", "NJ", "TX", "ID", "IL"]

// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
// ➞ []
// Notes
// State abbreviations will always be in uppercase.

function filterStateNames(arr, str) {
    let newArr = [];

    for (i = 0; i < arr.length; i++) {

        if (arr[i].length == str.length-1 ) {

            newArr.push(arr[i])
        }

        else {
            if (arr[i].length > n.length && str.length > 3) {

                newArr.push(arr[i])
            }
        }
    }
    return newArr;
}
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"))

