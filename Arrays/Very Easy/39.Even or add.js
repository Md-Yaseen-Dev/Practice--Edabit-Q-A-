// Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"
// Notes
// N/A

// -----------------1. here the arr of an item is unable to add each item so that the challenge will not stasify
// function evenOrOdd(arr) {

//     return ((arr%2 == 0)) ? "even" : "odd"       
// }

// console.log(evenOrOdd([0]));
// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([]));
// console.log(evenOrOdd([0, 1, 5])); //here you get odd because it will check last value 


// --------------here it will add each item but the empty array doesn't satisfy the challenge .
// function evenOrOdd(arr) {
//     const a = arr.reduce((b, c) => b + c);
    
//     return (a%2 == 0) ? "even" :"odd"
// }
// console.log(evenOrOdd([3, 4, 5]));
// console.log(evenOrOdd([0]));
// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([]));
// console.log(evenOrOdd([0, 1, 5]));

// here you done
function evenOrOdd(arr) {

    let sum = 0 ;

    for (const item of arr){

        sum+=item;
    }

    return (sum % 2 == 0) ? "even" : "odd"
}

console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));
