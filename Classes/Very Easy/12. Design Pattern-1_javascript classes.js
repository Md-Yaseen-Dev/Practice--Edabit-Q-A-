// Design Patterns I: JavaScript Classes?!?
// JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.

// Challenge
// Create a Book class using a JavaScript function - instantiable.
// It should have an author and published property.

// Create an Author class using a literal object - singleton.

// It should have a name and books property.

// Create a Publisher class by using the new constructor and an anonymous function - singleton.

// It should have an authors and books property.

// Create a Review class using a class declaration - instantiable.

// It should have a rating and user property.
// Bonus (optional)
// Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.

// Notes
// All classes should begin with Capital letters.
// All class properties should have default(initial) values.
// There are a few other ways to make classes but are not in this challenge, you can check the Resources tab to learn more.



function Book(author, published) {

    this.author = author;
    this.published = published;
}

const Author = {

    name: "faf",
    books: "edabit DSA",
}


const Publisher = new function(){
    this.authors = [];
    this.books = "empty"
}

class Review{
    constructor(rating,user){
        this.rating = rating;
        this.user =user;
    }
}

const Bookstore = (function(){
    const books = "you can do it";
    const prices = "$20";

    return{
        books, 
        prices,

    };
})();