// X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

// Examples
// convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
// ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// convertCartesian([9, 8, 3], [1, 1, 1])
// ➞ [[9, 1], [8, 1], [3, 1]]
// Notes
// x and y arrays will always be the same length.

function convertCartesian(arr1, arr2) {

    // let newArr = [];

    // for (i = 0; i < arr1.length; i++) {

    //     newArr.push([arr1[i], arr2[i]])

    // }
    // return newArr;

    return arr2.map(function (x, idx) {
        return [arr1[idx], x];
    })
}
console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
console.log(convertCartesian([9, 8, 3], [1, 1, 1]));