
// Format I: Template String
// Write a template string according to the following example:

// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
// Tips
// A template string is a string that uses a Dollar sign and curly braces inside backticks ${ } as a placeholder that can then be formatted:

// const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."
// You can put an expression inside the curly braces:

// const age = 12;
// `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."
// Notes
// N / A

function format(a, b, c) {

    const template = "your template string"

    return `${template} There names were: ${a} , ${b} , ${c} `
}

console.log(format("john", "Joe", "Doe"));