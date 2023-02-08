// Simple OOP Calculator
// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.
// Examples
// var calculator = new Calculator()

// calculator.add(10, 5) ➞ 15

// calculator.subtract(10, 5) ➞ 5

// calculator.multiply(10, 5) ➞ 50

// calculator.divide(10, 5) ➞ 2
// Notes
// The functions should return the result of the calculation.


class Calculator {

    add(c, d) {

        return c + d;
    }
    subtract(c, d) {

        return c - d;
    }

    multiply(c, d) {
        return c * d;
    }

    divide(c, d) {

        return c / d;
    }
}

var calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
