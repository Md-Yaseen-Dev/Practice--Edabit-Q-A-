// Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"
// Notes
// There won't be any tests with a number below 1 or greater than 10.
// Return the output in lowercase.
// The challenge is intended to be completed without conditionals (it would take too long)!


function nsidedshape(n) {

    switch (n) { 
        case 1: n = "circle";
            break;
        case 2: n = "semi-circle";
            break;
        case 3: n = "triangle";              // is this correct , i thought that cases matches with n and get the output
            break;
        case 4: n = "square";
            break;
        case 5: n = "pentagon";
            break;
        case 6: n = "hexagon";
            break;
        case 7: n = "heptagon";
            break;
        case 8: "octagon";
            break;
        case 9: n = "nonagon";
            break;
        case 10: n = "decagon"
            break;
    }
    return n;

}
console.log(nsidedshape(3));
console.log(nsidedshape(1));
console.log(nsidedshape(9));



// // we can create n sides using objects and arrays too
// function nsidedshape(m) {

//     var obj = {
//         1: "circle",
//         2: "semi-circle",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "octagon",
//         9: "nonagon",
//         10: "decagon",
//     }
//     return obj[m];
// }
// console.log(nsidedshape(3));
// console.log(nsidedshape(1));
// console.log(nsidedshape(10));


// function nsidedshape(n) {

//     var arr = ["zero", "circle", "semi-circle", "triangle", "square", "pentagaon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];

//     return arr.at(n);      // can i do this
// }

// console.log(nsidedshape(2));
// console.log(nsidedshape(4));
// console.log(nsidedshape(6));
