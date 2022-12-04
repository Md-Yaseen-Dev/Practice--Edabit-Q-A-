// Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.

function sumFive(arr) {
   const filter = arr.filter(element => element > 5);  // Is this correct way.

   return filter.reduce((a,b)=> a + b ,0);
};
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1,2,3,4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));
