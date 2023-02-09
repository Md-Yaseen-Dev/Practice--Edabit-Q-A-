// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"

// a1.lname ➞ "Smith"

// a1.fullname ➞ "John Smith"

// a1.initials ➞ "J.S"
// Notes
// Make sure only the first letter of each name is capitalised.
// Check the Resources tab for some helpful tutorials on JavaScript classes.


class Name {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        // this.fullname1 = firstname + lastname;
    }

    fname() {
        return this.firstname.charAt(0).toUpperCase() + this.firstname.slice(1);

    }
    lname() {
        return this.lastname.charAt(0) + this.lastname.slice(1).toLowerCase();
    }
    fullname() {
        return `${this.fname()} ${this.lname()}`;
    }

    initials() {

        return `${this.fname().charAt(0)}.${this.lname().charAt(0)}`;

    }
}

a1 = new Name("john", "SMITH");

console.log(a1.fname());
console.log(a1.lname());
console.log(a1.fullname());
console.log(a1.initials());

// ----------------------------without using methods --------------------------------------



// class Name {
//     constructor(firstname, lastname) {
//         this.firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
//         this.lastname = lastname.charAt(0) + lastname.slice(1).toLowerCase();
//         this.fullname = this.firstname + " " + this.lastname;
//         this.initials = this.firstname.charAt(0) + "." + this.lastname.charAt(0);
//     }
// }

// a1 = new Name("john", "SMITH");
// console.log(a1.firstname);
// console.log(a1.lastname);
// console.log(a1.fullname);
// console.log(a1.initials);