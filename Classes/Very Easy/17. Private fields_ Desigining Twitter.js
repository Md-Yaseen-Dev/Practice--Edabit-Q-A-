// Private Fields: Designing Twitter
// One of the most useful new features of JavaScript is private class fields. By writing a class like:

// class Person {
//   #secretMessage = "shhhh!"
//   constructor(name) {
//     this.name = name
//   }
// }
// we create a private property (#secretMessage) that is only accessible to stuff inside the class. So while:

//  class Person {
//   #secretMessage = "shhhh!"
//   constructor(name) {
//     this.name = name
//     console.log("I can access the private field!",this.#secretMessage)
//   }
//   someClassMethod() {
//     console.log("And so can I!",this.#secretMessage)
//   }
// }
// will work, the following:

// class Person {
//  #secretMessage = "shhhh!"
//   constructor(name) {
//    this.name = name
//   }
// }
// const bob = new Person("bob")
// console.log(bob.#secretMessage)
// will not. The property #secretMessage isn't "available" to outside scopes. So why is this a useful thing?

// Use Cases
// By using private fields (possibly in conjunction with getters and setters) we can, in essence, allow "protected" access to those fields. Two use cases where this might be important:

// Preventing direct modification:

// Imagine your class needs a particular array, myClassArray, to store some sort of information. However, you don't want external JavaScript to be able to use "normal" array methods to modify the array. Maybe you want to prevent pop()ing from the array. With a private field and a getter, we could do that:

// class Person {
//  #myClassArray = []
//  constructor(name) {
//    this.name = name
//  }
//  set arrItem(data) {
//    this.#myClassArray.push(data)
//  }
//  get arr() {
//    return [...this.#myClassArray]
//  }
// }
// In the above example, attempting to run classInstance.myClassArray would return an error, and there's no way to run a .pop() method on the array from outside. The contents of the array are still visible - thanks to our getter get arr() - but running arr.pop() does not modify the internal array.

// Hiding fields: As the name "private" sort of implies, another major use of private fields is that they can be used to hide certain sensitive data. For example, if we want to store a password in our Person class above, one unsafe way of doing it would be as follows:

// class Person {
//   constructor(name, password) {
//     this.name = name
//     this.password = password
//   }
// }
// Even if we encrypt the password, it's still visible for anyone (or any program) to attempt to crack. Instead, we can use a private class field, with only a checkPassword() method and no getter or setter, to add password functionality without risk of exposing our password:

// class Person {
//   #password
//   constructor(name, password) {
//     this.name = name
//     this.#password = this.encryptMe(password)
//   }
//   encryptMe(str) {
//     // assume this encrypts a string
//     return encryptedString
//   }
//   checkPassword(candidate) {
//     return this.encryptMe(candidate) == this.#password
//   }
// }
// Notice that the #password field is never visible to the outside, and yet we can still use it for authentication!

// Alright, enough blabbering. What's your goal?

// Your Goal
// Design a Twitter class. Your class must:

// Private password: A private password string. Since this is private, you can name it whatever you want (as long as it's private!).
// Private tweets array: A private tweets array. Again, feel free to name this whatever you want (I should not have access to it!)
// Constructor(user, pass): A constructor that takes two arguments - a user and a pass(word) - and sets the publicly visible field this.user to the incoming user argument.
// Constructor sets password: It should also set the value of the private password field. Feel free to pass this through an encryption method if you're feeling extra fancy.
// checkPassword() Method: This method has one parameter - a string - and checks that parameter against the stored, private password, returning a boolean that basically says whether your supplied string matches the stored password.
// "blanked" password setter and getter: Attempting to read classInstance.password should just return four asterisks (****). Attempting to set the password (e.g., classInstance.password = "myNewPassword") should do nothing. That is, setting the password to a new value should not affect what "works" in the above password checker.
// tweet setter: This accepts a string and pushes the stringinto the private tweets array.
// tweet getter: Returns a copy of the array of tweets.
// tweetArray.pop() doesn't work: Running .pop() on your tweets array shouldn't 'work'. That is, if I have 5 tweets, run .pop(), and then get the length of my tweets array, it should still read 5.
// Notes
// There are a few variables/methods: for this exercise that will need to be named exactly:

// classInstance.user: the username.
// classInstance.tweet: The setter for a new tweet.
// classInstance.tweets: The getter for the list of tweets
// classInstance.checkPassword(str): Checks a candidate password against the stored password.
// classInstance.password: getter that just returns four asterisks (****)
// Notice the difference between "tweet" (the setter) and "tweets" (the getter)!


class Twitter {
    #password
    #tweets= [];
    constructor(name, password) {
        this.name = name;
        this.#password = this.encrptMe(password)

    }
    encrptMe(str) {
        return "encrptedSting";
    }
  checkPassword(candidate){
    return this.encrptMe(candidate) == this.#password;
  }

  get password(){

    return "****"
  }

  set password(newPassword) {
    // Do nothing, password cannot be set from outside the class
  }

  set tweet(tweet) {
    this.#tweets.push(tweet);
  }

  get tweet() {
    return [...this.#tweets];
  }

}

const classInstance = new Twitter("yaseen" , 2);

console.log(classInstance.checkPassword("asasd"))