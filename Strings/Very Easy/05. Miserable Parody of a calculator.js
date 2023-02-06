// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
// calculator("23+4") ➞ 27

// calculator("45-15") ➞ 30

// calculator("13+2-5*2") ➞ 5

// calculator("49/7*2-3") ➞ 11
// Notes
// There will be no brackets in the input line.
// No need to calculate mathematical functions (sin, cos, ln...).
// There are no gaps in the expression.


function calculator(str) {

    // return Function("return " + str)();

    return eval(str);
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));