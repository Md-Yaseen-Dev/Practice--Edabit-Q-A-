// True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]
// Notes
// Expect numbers with 0 and 1 only.

function integerBoolean(n) {
     let a  = [...n ];
    // let a = n.split("");                // is this correct.
    return a.map(element => (element == 1) ? true : false)
}

console.log(integerBoolean("1000"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));


