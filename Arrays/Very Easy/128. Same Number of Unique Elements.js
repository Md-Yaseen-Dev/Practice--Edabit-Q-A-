// Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

// Examples
// same([1, 3, 4, 4, 4], [2, 5, 7]) ➞ true

// same([9, 8, 7, 6], [4, 4, 3, 1]) ➞ false

// same([2], [3, 3, 3, 3, 3]) ➞ true
// Notes
// N/A


// function same(arr1) {

//   return  arr1.filter((item, index) => arr1.indexOf(item) !== index )
// }
// console.log(same([1, 3, 4, 4, 4], [2, 5, 7]));
// console.log(same([4, 4, 3, 1]));


// -------------------------------
function same(arr1, arr2) {

    var mf = 1;
    var m = 0;
    // var item;

    var nf = 1;
    var n = 0;
    for (i = 0; i < arr1.length; i++) {


        for (j = i; j < arr1.length; j++) {


            if (arr1[i] == arr1[j]) {
                m++;
                if (mf < m) {

                    mf = m;               // it is used for how many times
                    // item = arr1[i]  which item is repeated
                }
            }
        }
        m = 0;
    }
    for (i = 0; i < arr2.length; i++) {


        for (j = i; j < arr2.length; j++) {


            if (arr2[i] == arr2[j]) {
                n++;
                if (nf < n) {

                    nf = n;               // it is used for how many times
                    // item = arr1[i]  which item is repeated
                }
            }
        }
        n = 0;
    }

    return mf >=3 || nf >=3 
    }
console.log(same([1, 3, 4, 4, 4], [2, 5, 7]));
console.log(same([9, 8, 7, 6], [4, 4, 3, 1]));
console.log(same([2], [3, 3, 3, 3, 3]));
