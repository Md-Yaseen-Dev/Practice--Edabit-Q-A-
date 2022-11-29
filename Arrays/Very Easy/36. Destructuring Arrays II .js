// ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"
// With ES6, you can assign variables from arrays in a much more succinct way.

// Notes
// Check the Resources tab for more examples.

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];

let [trans1 , trans2 , [trans3, [trans4]]] = arr ;  // check once.

console.log(trans1);
console.log(trans2);
console.log(trans3);
console.log(trans4);
