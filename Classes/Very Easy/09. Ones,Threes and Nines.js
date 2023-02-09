// Ones, Threes and Nines (Version #1)
// Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

// Examples
// let n1 = new OnesThreesNines(5)
// n1.nines ➞ 0

// n1.ones ➞ 5

// n1.threes ➞ 1
// Notes.
// This was originally a Python problem over here.
// See another Python version of this series.
// I'd suggest using getters and setters for this, but you're welcome to use any method you choose!

// class OnesThreesNines {
//     constructor(n) {

//         this.n = n
//     }
//     ones() {
//         return this.n
//     }
//     threes() {
//         return Math.trunc((this.n / 3));
//     }
//     nines() {
//         return Math.trunc(this.n / 9);
//     }
// }
// n1 = new OnesThreesNines(5);

// console.log(n1.ones());
// console.log(n1.threes());
// console.log(n1.nines());

// ---------- without using methods----------------------------


class OnesThreesNines {
    constructor(n, ones, threes, nines) {

        this.n = n;
        this.ones = this.n / 1;
        this.threes = Math.floor((this.n / 3));
        this.nines = Math.floor(this.n / 9)
    }
}

n1 = new OnesThreesNines(5);

console.log(n1.ones);
console.log(n1.threes);
console.log(n1.nines);