// Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// Examples
// oddProduct([3, 4, 1, 1, 5]) ➞ 15

// oddProduct([5, 5, 8, 2, 4, 32]) ➞ 25

// oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1
// Notes
// N/A

function oddProduct(arr) {

    // let oddArr = arr.filter(elem => elem % 2 !== 0)

    // let product = a[0];

    // for (i = 1; i <= a.length; i++) {

    //     product = arr[0] * arr[i]
    // }
    // return product;

    // return oddArr.reduce((a, b) => a * b)

    return arr.filter(elem => elem % 2 !== 0).reduce((a, b) => a * b)

}

console.log(oddProduct([3, 4, 1, 1, 5]));
console.log(oddProduct([5, 5, 8, 2, 4, 32]));
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));