// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.


function minMax(arr) {

    let min = Math.min(...arr)  // using spread

    let max = Math.max(...arr.map(x => x)) // using map

    return [min, max]
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));


let person = {
    name: "John"
};
let otherPerson = {
    name: "Jane"
};
let sayName = function() {
    console.log(this.name);
}.bind(otherPerson);

sayName(); // for bind we 


