// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.


class Circle {
    constructor(r) {
        this.r = r;

    }
    getArea() {
        // const PI = 3.14;
        return Math.PI * Math.pow(this.r, 2);
    }
    getPremiter() {
        // const PI = 3.14;

        return (2 * Math.PI * this.r)
    }
}

let circy = new Circle(11);
let circy1 = new Circle(4.44);

console.log(circy.getArea());
console.log(circy1.getPremiter());
