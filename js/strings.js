/*
Create a strings.js file inside codeup-web-exercises
In that file, create a string which tells us about yourself in 3 sentences.
Use 3 variables to store the respective sentences.
Console.log the concatenated sentences!
 */

let myIntro = "my name is Matt, I am new to TX (originally from WI). \n"
let myHobbies = "I enjoy hiking with my family, motorsports, gaming and skydiving. \n"
let whyImHere = "I am interested in the 'Internet of Things' and would like to pursue that industry."

console.log(myIntro + myHobbies + whyImHere);


// If I wanted to capitalize the first letter of a word
const cap = myIntro.charAt(0).toUpperCase() + myIntro.slice(1);
console.log(cap);

// Class example
let myName = "casey";
// Note that charAt() is supported on older browsers, and bracket notation is more modern. But they behave differently
// for certain edge cases. Use charAt for strings, brackets for objects/arrays
const caps = myName[0].toUpperCase() + myName.slice(1);
console.log(caps)


