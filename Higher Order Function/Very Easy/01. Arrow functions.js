// Arrow Functions
// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write five adder functions:

// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.
// Tips
// Functions that consist only of a return can be written as a one-liner with an arrow function.

// For example, the code:

// function areSame(a, b) {
//     return a == b;
// }
// Can be simplified to:

// areSame = (a, b) => a == b;
// Bonus
// (a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().

// Notes
// This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
// Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comment

const add2 = x => 2 + x;
const add3 = x => 3 + x;
const add4 = x => 5 + x;
const add5 = x => 7+ x;
const add6 = x => 11 + x;

console.log(add2(5));
console.log(add3(5));
console.log(add4(5));
console.log(add5(5));
console.log(add6(5));
