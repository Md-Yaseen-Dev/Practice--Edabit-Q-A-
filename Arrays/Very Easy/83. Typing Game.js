// Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples
// correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// ) ➞ [1, 1, -1]

// correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// ) ➞ [1, -1, 1, 1, 1]
// Notes
// The input array lengths will always be the same.

function correctStream(user, correct) {

    let newArr = [];
    // for (let i = 0; i < user.length; i++) {

    //     if (user[i] == correct[i]) {

    //         newArr.push(1);
    //     }
    //     else {

    //         newArr.push(-1);
    //     }

    // }
    // return newArr;

    // for (const item in user) {

    //     if (user[item] == correct[item]) {

    //         newArr.push(1)
    //     }
    //     else {
    //         newArr.push(-1);

    //     }
    // }
    // return newArr;

    return user.map(elem => (user.includes(elem) == correct.includes(elem))? 1 : -1) ;
}
console.log(correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]));
console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]));
console.log(correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]))