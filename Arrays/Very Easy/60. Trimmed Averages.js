// Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// Examples
// trimmedAverages([4, 5, 7, 100]) ➞ 6
// // Average of 5 and 7

// trimmedAverages([10, 25, 5, 15, 20]) ➞ 15
// // Average of 10, 15 and 20

// trimmedAverages([1, 1, 1]) ➞ 1
// // 1
// Notes
// Round to the nearest whole number.
// Array size is greater than 2.

function trimmedAverages(arr) {
    let biggestNum = 0;
    let smallestNum = arr[0];
    for (i = 0; i < arr.length; i++) {

        if (biggestNum < arr[i]) {

            biggestNum = arr[i]
        }

        if (smallestNum > arr[i]) {
            smallestNum = arr[i]
        }
    }


    const newarr = arr.filter(elem => (elem != biggestNum) && (elem != smallestNum));

    for (j = 0; j < newarr.length; j++) {

        newarr[j] = newarr[j] / newarr.length;
    }
    return (arr[0] == arr[1]) ? arr[0] : newarr.reduce((a, b) => (a + b));
}

console.log(trimmedAverages([4, 5, 7, 100]));
console.log(trimmedAverages([10, 25, 5, 15, 20]));
console.log(trimmedAverages([1, 1, 1]));



