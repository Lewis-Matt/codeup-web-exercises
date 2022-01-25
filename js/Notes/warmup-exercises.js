"use strict";
// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.
let namesArray = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

console.log('ES6 version')
let filtered = namesArray.filter(string => string.length === 4);
console.log(filtered);

console.log('For Loop Version')

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

// 24 JANUARY
console.log('----------24 JANUARY----------')
// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485" --- EXPECTED OUTPUT 2: 34
console.log('Method using .forEach()')

let sumOfNumbers = function (str) {
    let sum = 0;
    let strArr = str.split('');
    strArr.forEach((number) => {
        number = Number(number);
        sum += number;
    });
    return sum;
}

console.log(sumOfNumbers("42958372"));

// Another method using the reduce() method
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not change the original array.
console.log('Method using .reduce()')

let sumOfNumbersAlt = function (str) {
    let strArr = str.split('');
    return strArr.reduce(function (sum, currentNumber) {
        return (Number(sum) + Number(currentNumber));
    });
}

console.log(sumOfNumbersAlt("42958372"));

// 25 JANUARY
console.log('----------25 JANUARY----------');

// Find any repeating numbers (consecutive) and return an object with Key: Value as 'number: # times it repeats'ß
// INPUT: “42992338111134”
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}

const testString = '42992338111134';
let findDuplicates = function (str) {
    const duplicatesObj = {};
    let strArr = str.split('');
    strArr.forEach(element => {
        duplicatesObj[element] = (duplicatesObj[element] || 0) + 1;
    });
    console.log(duplicatesObj);
}
findDuplicates(testString);
