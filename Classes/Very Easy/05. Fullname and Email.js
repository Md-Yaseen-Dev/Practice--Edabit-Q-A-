// Fullname and Email
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
// Examples
// emp1 = Employee("John", "Smith")
// emp1.fullname ➞ "John Smith"

// emp2 = Employee("Mary",  "Sue")
// emp2.email ➞ "mary.sue@company.com"

// emp3 = Employee("Antony", "Walker")
// emp3.firstname ➞ "Antony"
// Notes
// The properties firstname and lastname are already made for you.
// See the Resources tab for some helpful tutorials on JavaScript classes!


class Employee {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = `${firstName.toLowerCase()}.${this.lastName.toLowerCase()}@company.com`
        this.fullname = `${this.firstName} ${this.lastName}`
    }
    // get fullname() {

    //     return `${this.firstName} ${this.lastName}`     // we can do by using methods too.
    // }
    // get email() {

    //     return `${this.firstName}.${this.lastName}@company.com`

    // }
}

emp1 = new Employee("John", "Smith");
emp2 = new Employee("Mary", "Sue");
emp3 = new Employee("Antony", "walker");


console.log(emp1.fullname);
console.log(emp2.email);
console.log(emp3.firstName);
