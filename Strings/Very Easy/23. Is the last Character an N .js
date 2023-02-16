// Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples
// isLastCharacterN("Aiden") ➞ true

// isLastCharacterN("Piet") ➞ false

// isLastCharacterN("Bert") ➞ false

// isLastCharacterN("Dean") ➞ true
// Notes
// The function must return a boolean value ( i.e. true or false).



function isLastCharacterN(str) {

    // ----- using str.at--------------------------\

    // return str.at(str.length-1 ) == "n";


    // ---------------using str.endsWith---------------\


    // return str.endsWith("n");


    // ----------------------using str.charAt----------------\


    return str.charAt(str.length - 1) == "n";






}

console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"))