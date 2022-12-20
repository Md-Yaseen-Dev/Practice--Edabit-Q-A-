// Age Difference Between Spouses
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

// Examples
// ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"

// ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."

// ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"
// Notes
// Note the singular "year".
// The younger spouse (if the spouses are not the same age) will be older than their oldest child by a minimum of 20 years.
// The age difference between spouses will not be more than 18 years.

function ageDifference(ages) {

    const sequenceAge = ages.sort((a, b) => { return a - b });
    const numOfyears = sequenceAge.pop() - sequenceAge.pop();
    return (numOfyears == 0 || numOfyears >= 18) ? `No age difference between spouses.` : (numOfyears == 1) ? `${numOfyears} year` : `${numOfyears} years`;

}
console.log(ageDifference([29, 1, 6, 8, 28]));
console.log(ageDifference([43, 86, 49, 86]));
console.log(ageDifference([2, 4, 6, 32, 27]));

