// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// Examples
// binaryToDecimal([0, 0, 0, 1]) ➞ 1

// binaryToDecimal([0, 0, 1, 0]) ➞ 2

// binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005
// Notes
// N/A

function binaryToDecimal(arr){

    var a =  arr.join('');

    return Number.parseInt(a,2);

}

console.log(binaryToDecimal([0,0,0,1]));
console.log(binaryToDecimal([0,0,1,0]));
console.log(binaryToDecimal([0,1,0,0]));

console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]))

