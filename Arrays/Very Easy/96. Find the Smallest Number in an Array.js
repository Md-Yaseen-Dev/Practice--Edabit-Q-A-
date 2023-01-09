// Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

// Examples
// findSmallestNum([34, 15, 88, 2]) ➞ 2

// findSmallestNum([34, -345, -1, 100]) ➞ -345

// findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

// findSmallestNum([7, 7, 7]) ➞ 7
// Notes
// Test cases contain decimals.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function findSmallestNum(arr) {

    //----using spread operator  ---- Es6 

    return Math.min(...arr);


    // ----using es5

    // return Math.min.apply(Math,arr)


    //----------------------------------------- not formal

    // arr.sort((a, b) => { return a - b });
    // return arr[0];

    //----using filter method

    // return arr.filter(smallestNum => smallestNum == Math.min(...arr)).toString();
}
console.log(findSmallestNum([34, 15, 88, 2]));
console.log(findSmallestNum([34, -345, -1, 100]));
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));
console.log(findSmallestNum([7, 7, 7]));