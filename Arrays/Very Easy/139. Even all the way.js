// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
// Notes
// Arrays start at index 0.


function getOnlyEvens(arr) {


    // ----------------------- using for loop -------------------------
    // let newArr = []

    // for (i = 0; i < arr.length; i++) {
    //     if (i % 2 == 0 && arr[i] % 2 == 0)

    //         newArr.push(arr[i])

    // }

    // return newArr;


    // ------------------------using filter -----------------------------


    return arr.filter((num, index) => num % 2 == 0 && index % 2 == 0)

}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));