// Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples
// countUppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6

// countUppercase(["little", "lower", "down"]) ➞ 0

// counUppercase(["EDAbit", "Educate", "Coding"]) ➞ 5
// Notes
// Check the Resources for some array methods that might be helpful.
// This is originally a loose translation of a Python problem. However, the Pythonic List Comprehension syntax was never really adopted in JavaScript, so I elected to make a our Uppercase counter broken in a few other ways.
// A lot of people (including me!) have rewritten the function entirely. I'm gonna make an executive decision and say that's fine here (even though complete rewrites are generally not a good idea!).


function countUppercase(str) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {

        for (j = 0; j < str[i].length; j++) {
            if (str[i][j] === str[i][j].toUpperCase()) {

                sum++
            }
        }
    }
    return sum
}

console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]));
console.log(countUppercase(["little", "lower", "down"]) );
console.log(countUppercase(["EDAbit", "Educate", "Coding"]));