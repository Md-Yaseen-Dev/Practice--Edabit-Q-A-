// String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Examples
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]

// stringPairs("edabit") ➞ ["ed", "ab", "it"]

// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]
// Notes
// Return [] if the given string is empty.

function stringPairs(str) {

    const newArr = []

    for (i = 0; i < str.length; i = i + 2) {

        if (str.length % 2 == 0) {

            newArr.push(str.substring(i, i + 2));
        }
        else {
            newArr.push((str.padEnd(str.length + 1, "*").substring(i, i + 2)));

        }
    }
    return newArr;
}
console.log(stringPairs("mubashir"));
console.log(stringPairs("edabit"));
console.log(stringPairs("airforces"));
// console.log(stringPairs(""));


// ------ substr

function stringPairs1(str) {
    const newArr = []

    for (i = 0; i < str.length; i = i + 2) {


        if (str.substr(i, 2).length == 2) {
            newArr.push(str.substr(i, 2));
        }
        else {
            newArr.push(str.charAt(str.length - 1) + "*")
        }
    }
    return newArr;
}

console.log(stringPairs1("mubashir"));
console.log(stringPairs1("edabit"));
console.log(stringPairs1("airforces"));

