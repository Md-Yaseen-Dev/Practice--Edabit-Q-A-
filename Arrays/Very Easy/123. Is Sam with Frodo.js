// Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// Examples
// middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

// middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false

// middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true
// Notes
// No matter who comes first, the result must be true if Frodo and Sam are side by side.
// There is only one Sam and one Frodo in the array.


function middleEarth(arr) {
    return arr.indexOf("Frodo" && "Sam") == 1
}
console.log(middleEarth(["Frodo", "Sam", "Gandalf"]));
console.log(middleEarth(["Frodo", "Saruman", "Sam"]));
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]))