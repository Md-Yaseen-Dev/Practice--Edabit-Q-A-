// CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples
// cmsSelector(["WordPress", "Joomla", "Drupal"], "w") ➞ ["WordPress"]

// cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ➞ ["Drupal"]

// cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]
// Notes
// The given letter(s) are case sensitive and can be more than one.
// In the case of an empty string, return the entire array.
// A CMS is a Content Management System.

function cmsSelector(arr, str) {

    // let newArr = [];
    // for (i = 0; i < arr.length; i++) {


    //     if (arr[i].toLowerCase().match(str)) {

    //         newArr.push(arr[i])
    //     }
    // }


    return arr.filter(elem => (elem.toLowerCase().match(str)) ? elem : 0);
}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));