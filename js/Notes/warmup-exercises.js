"use strict";
// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.
let namesArray = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

// ES6 version
let filtered = namesArray.filter(string => string.length === 4);
console.log(filtered);

// For Loop Version
function namesWithFourLetters(arr) {
    let sortedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            sortedArray.push(arr[i]);
        }
    }
    return sortedArray;
}

console.log(namesWithFourLetters(namesArray));

// 20 JANUARY
console.log('----------20 JANUARY----------')
// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter

// I was having all sorts of confusion with the regex test() method. It returns true or false; I was trying to use if(regex.test(element) === element), which is stupid...
let caseChecker = function (str) {
    let strArr = str.split('');
    const regex = /[a-zA-Z]/;
    strArr.forEach((element) => {
        if (regex.test(element) === false) {
            console.log(`${element} is not a letter`)
        } else if (element.toUpperCase() === element) {
            console.log(`${element} is uppercase`);
        } else {
            console.log(`${element} is lowercase`);
        }
    });
}
caseChecker('bJI*ENsd4fRAIR5VIrsRFA-ijgRar7');
