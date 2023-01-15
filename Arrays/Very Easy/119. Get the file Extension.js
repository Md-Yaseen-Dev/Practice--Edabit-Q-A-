// Get the File Extension
// Write a function that maps files to their extension names.

// Examples
// getExtension(["code.html", "code.css"])
// ➞ ["html", "css"]

// getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
// ➞ ["jpg", "pdf", "mp3"]

// getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
// ➞ ["rb", "cpp", "py", "js"]
// Notes
// N/A

function getExtension(arr) {

    return arr.map(elem => elem.substring(elem.indexOf(".") +1));
}
console.log(getExtension(["code.html", "code.css"]));
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));