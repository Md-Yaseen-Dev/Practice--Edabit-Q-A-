// Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true
// Notes
// Remember to return either true or false.
// All arrays contain two positive numbers.
// If you're stuck, check the Resources for a hint.


function checkSquareAndCube(arr) {

    // return (Math.sqrt(arr[0]) == Math.cbrt(arr[1])) ? true : false

    for (let i = 0; i < arr.length; i++) {

        let sqrt = Math.sqrt(arr[i]);
        let cbrt = Math.cbrt(arr[arr.length - 1]);

        if ((arr[arr.length - 1] / arr[i] == cbrt)) {

            return true;
        }
        else {
            return false;
        }
    }
}

// function checkSquareAndCube(arr) {
//     let square = Math.sqrt(arr[0]);
//     let cube = square * square * square;
//     if (cube === arr[1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));
