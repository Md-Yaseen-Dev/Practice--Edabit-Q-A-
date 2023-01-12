// Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

// Examples
// transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]

// transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]

// transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
// Notes
// N/A

function transform(arr) {

    let newArr = [];
    for (i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {

            newArr.push(arr[i] - 1)
        }

        else {
            newArr.push(arr[i] + 1)
        }
    }
    return newArr;
}

console.log(transform([1, 2, 3, 4, 5]));
console.log(transform([3, 3, 4, 3]));
console.log(transform([2, 2, 0, 8, 10]))