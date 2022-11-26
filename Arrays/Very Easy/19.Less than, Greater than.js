// Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []
// Notes
// N/A

function arrBetween(num1, num2, arr) {

   return arr.filter((element => element > num1 && element < num2))
}
console.log(arrBetween(3, 8, ([1, 5, 95, 0, 4, 7])));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));



