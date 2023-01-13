// Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// Examples
// formatDate("11/12/2019") ➞ "20191211"

// formatDate("12/31/2019") ➞ "20193112"

// formatDate("01/15/2019") ➞ "20191501"
// Notes
// Return value should be a string.

function formatDate(str){

    return str.split("/").reverse().join("")

}
console.log(formatDate("11/12/2019"));
console.log(formatDate("12/31/2019"));
console.log(formatDate("01/15/2019"));