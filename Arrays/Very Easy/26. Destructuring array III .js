// ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.

// Notes
// Check the Resources tab for more examples.

const arr = ["eyes", "nose", "lips", "ears"];

// var [lips = arr[2]] = arr; // it is returning first item of an array.

let [eyes, nose, lips, ear] = arr;

console.log(lips);