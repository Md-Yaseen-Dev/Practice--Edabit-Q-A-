// Amplify the Multiples of Four
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// Examples
// amplify(4) ➞ [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40

// amplify(3) ➞ [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4

// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
// Notes
// The given parameter num will always be equal to or greater than 1.
// Remember to include the num as the higher bound of the sequence (see the Examples) above.
// A number a amplified by a factor b can also be read as: a * b.
// A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


function amplify(n) {

    let newArr = []
    for (i = 1; i <= n; i++) {

        if (i % 4 == 0) {

            newArr.push(i * 10)
        }
        else {
            newArr.push(i)
        }
    }
    return newArr;
}

console.log(amplify(4));
console.log(amplify(3));
console.log(amplify(25));