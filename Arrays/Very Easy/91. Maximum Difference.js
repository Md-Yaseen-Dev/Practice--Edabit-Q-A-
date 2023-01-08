// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18

// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

// difference([4, 17, 12, 2, 10, 2]) ➞ 15
// Notes
// N/A

function difference(arr) {

    let smallestNum = arr[0];
    let biggestNum = 0;

    for (i = 0; i < arr.length; i++) {

        if (smallestNum > arr[i]) {

            smallestNum = arr[i];
        }

        if (biggestNum < arr[i]) {

            biggestNum = arr[i]
        }
    }
    return biggestNum-smallestNum;

    // return Math.max(...arr) - Math.min(...arr);
}
console.log(difference([10, 15, 20, 2, 10, 6]));
console.log(difference([-3, 4, -9, -1, -2, 15]));
console.log(difference([4, 17, 12, 2, 10, 2]));