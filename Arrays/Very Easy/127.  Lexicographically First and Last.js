// Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]
// Examples
// firstAndLast("marmite") ➞ ["aeimmrt", "trmmiea"]

// firstAndLast("bench") ➞ ["bcehn", "nhecb"]

// firstAndLast("scoop") ➞ ["coops", "spooc"]
// Notes
// Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
// Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).

function firstAndLast(string) {

    // let newArr = [];

    let First = string.split("").sort().join("");

    let last = string.split("").reverse().join("");

    return [First, last];
}
console.log(firstAndLast("marmite"));
console.log(firstAndLast("bench"));
console.log(firstAndLast("scoop"));
