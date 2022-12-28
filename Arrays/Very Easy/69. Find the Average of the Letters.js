// Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// Examples
// averageIndex(["a", "b", "c", "i"]) ➞ 3.75

// averageIndex(["e", "d", "a", "b", "i", "t"]) ➞ 6.83

// averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]) ➞ 12.62
// Notes
// Letters given will always be lowercase.


function averageIndex(arr) {

    // let alphabetNum = {
    //     a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,        
    //     l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,                 // --- can  i do with objects.
    //     u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    // }
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(alphabets.indexOf(arr[i]) + 1);
    }
    const roundedArr = newArr.reduce((a,b)=> a+b)/newArr.length;
    return roundedArr.toFixed(2)
}
console.log(averageIndex(["a", "b", "c", "i"]));
console.log(averageIndex(["e", "d", "a", "b", "i", "t"]) );
console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]));

