// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


function check(arr,item){
    return arr.includes(item);
}

console.log(check([1,2,3,4,5],3));


console.log(check([1, 1, 2, 1, 1], 3));

console.log(check([5, 5, 5, 6], 5));

console.log(check([], 5));