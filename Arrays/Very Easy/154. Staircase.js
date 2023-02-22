// function staircase(n) {
//     // Write your code here
//     let str = " ";
//     for (let i = 0; i <= n; i++) {

//         str += " ".repeat(n - i)

//         for (let j = 0; j < i; j++) {

//             str += "#"

//         }
//         str += "\n"
//     }
//     return str

// }
// console.log(staircase(4))


// --- we can write like these to

function staircase(n) {
    let str = ""
    for (let i = 1; i <= n; i++) {

        str += " ".repeat(n - i) + "#".repeat(i) + "\n"
    }
    return str
}
console.log(staircase(6))



