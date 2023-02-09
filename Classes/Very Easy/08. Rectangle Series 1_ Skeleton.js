// Rectangle Series 1: Skeleton
// Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:

// constructor(x, y, width, height)
// Constructs a new rectangle whose top-left corner is specified by the given coordinates and with the given width and height.
// It should have the following properties:

// x

// y

// width

// height
// It should have the following methods:

// toString()
// Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

class Rectangle {

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    toString() {

        return `[ x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
    }

}

const rectangle = new Rectangle(1, 2, 3, 4);

console.log(rectangle.toString())