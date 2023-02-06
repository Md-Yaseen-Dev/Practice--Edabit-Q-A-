// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Examples
// newWord("apple") ➞ "pple"

// newWord("cherry") ➞ "herry"

// newWord("plum") ➞ "lum"
// Notes
// The input is always a valid word.

function newWord(str) {

    // return str.slice(1);
    return str.substring(1);
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));