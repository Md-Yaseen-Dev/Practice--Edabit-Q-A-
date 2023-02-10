// Book Shelf
// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// The name of the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:

// Examples
// HP.title ➞ "Harry Potter"
// HP.author ➞ "J.K. Rowling"
// HP.getTitle() ➞ "Title: Harry Potter"
// HP.getAuthor() ➞ "Author: J.K. Rowling"
// Notes
// Read more about constructor functions in Resources.
// Remember, after you've finished writing the constructor function, you must instantiate it through the creation of new objects.


// -----using class -----------------------------
class Book {
    constructor(Title, Author) {

        this.Title = Title;
        this.Author = Author;
    }

    getTitle() {
        return `Title: ${this.Title}`
    }
    getAuthor() {
        return `Author: ${this.Author}`
    }
}
const HP1 = new Book("Harry Potter", "J.K.Rowling");
const H2= new Book("Hamlet", "Willam Shakespare");
const WP1 = new Book("War and Peace", "Leo Tolstoy");

console.log(HP1.Title);
console.log(HP1.Author);
console.log(HP1.getTitle());
console.log(HP1.getAuthor());


// by using book constructor function ----------------------------------

function book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = function () {
        return `Title: ${this.title}`
    }
    this.getAuthor = function () {
        return `Author: ${this.author}`

    }
}
const HP = new book("Harry Potter", "J.K.Rowling");
const H = new book("Hamlet", "Willam Shakespare");
const WP = new book("War and Peace", "Leo Tolstoy");

console.log(HP.title);
console.log(HP.author);
console.log(HP.getTitle());
console.log(HP.getAuthor());

