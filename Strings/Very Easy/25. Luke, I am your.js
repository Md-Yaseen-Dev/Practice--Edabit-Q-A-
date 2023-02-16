// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."
// Notes
// N/A


function relationToLuke(str) {

    let luke = "Luke I am your "
    switch (str) {
        case "Darth Vader": return luke + "father";
        case "Leia": return luke + "sister";
        case "Han": return luke + "brother in law";
        case "R2D2": return luke + "droid"
    }
}
console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));