// Cowboy Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// Examples
// rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3

// rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5

// rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2
// Notes
// All the bottles will be shot down in all the tests.

function rogerShots(arr) {
    let test = 0;

    // for (i = 0; i < arr.length; i++) {

    //     if (arr[i] === "BangBang!" || arr[i] == "Bang!") {

    //         test += 1 / 2;
    //     }
    // }

      
    arr.filter(elem => (elem == "BangBang!" || elem == "Bang!") ? test += 1 / 2 : 0);

    return test;
}
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]));
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]));