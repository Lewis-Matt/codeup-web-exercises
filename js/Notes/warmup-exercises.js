"use strict";
// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.
let namesArray = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

// ES6 version
let filtered = namesArray.filter(string =>string.length === 4);
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

