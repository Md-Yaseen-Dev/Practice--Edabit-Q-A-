// Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples
// moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]

// moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]

// moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Notes
// N/A

function moveZeros(arr) {

        let count = 0;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] !== 0) {
                arr[count++] = arr[i];  // arr[0] = 1 ; arr[1] = 1 ; arr[2] =2 ; arr[3] =1 ; arr[4] =3; arr[5] =? (1) arr[6] = ? (3)

            }

        }
        while (count < arr.length) {
            arr[count++] = 0;               // 0<7 then arr[0] = 0; arr[1] = 0 ;arr[2] = 0 ; arr[3] = 0 ;arr[4] = 0 arr[5] =0 ; arr[6] = 0
        }

        return arr;


    // let zeroArray = [];
    // let numberArray = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 0) {
    //         zeroArray.push(arr[i]);
    //     }

    //     {
    //         numberArray.push(arr[i])
    //     }
    // }
    // return numberArray.concat(zeroArray)
}
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));
