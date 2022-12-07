// Sum of Minimums
// Create a function that takes a 2D arr arr and returns the sum of the minimum value in each row.

// Examples
// sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]) ➞ 26

// // minimum value of the first row is 1
// // minimum value of the second row is 5
// // minimum value of the third row is 20
// Notes
// N/A


function sumMinimums(arr) {

    let smallestnum = arr[0];
    console.log(smallestnum)

    for (i = 1; i < arr.length; i++) {
        if (arr[i] < smallestnum) {
            smallestnum = arr[i];
            console.log(smallestnum)
        }
    }
    // return smallestnum;


    // return arr.map(item => Math.min(...item));
}



function getMinimum(arr) {

    const output = [];

    for (let i = 0; i < arr.length; i++) {

        let min1 = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {

            if (arr[i][j] < min1  /*arr[i][j-1] */  ) {

                min1 = arr[i][j];

            }

        }
        output.push(min1);

    }

    return output;
}
console.log(getMinimum([[2, 1, 3, 4, 5], [5, 6, 3, 8,], [20, 21, 34, 56, 100], [1, 2, 3]]));



// // console.log(sumMinimums([1, 0, 3, 4, 5]));



function getMinArray(arr) {
    const result = [];
    let i = 0;
    while (i < arr.length) {
        let min = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] < arr[i][j - 1]) {
                min = arr[i][j];
            }
        }
        i++;
        result.push(min);
    }
    return result;

}
console.log(getMinArray([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]));