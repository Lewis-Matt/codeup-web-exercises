"use strict";

// OLD
console.log(Math.pow(2,8));
// ES6
console.log(2 ** 8);

// VAR vs LET & CONST
// without block scope
if (true) {
    var name = 'codeup';
}
console.log(name); // 'codeup'

//  with block scope
if (true) {
    let name = 'codeup';
}
console.log(name); // undefined

// TEMPLATE STRINGS
let coding = 'Coding';
console.log(`${coding} is fun!`)

// FOR ... OF
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
// We cannot reassign 'element' in a for of loop (can in for loop). e.g. { element = 'F' } does nothing
// Can change properties { element.gty = 25; } of an object
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
    console.log(element);
}

// ARROW FUNCTIONS
// 'this; is bound lexically
const sayHello1 = function (name) {
    return 'Hello, ' + name + '!';
}
// same as
const sayHello2 = (name) => 'Hello, ' + name + '!';

// DEFAULT FUNCTION PARAMETERS
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

// OBJECT PROPERTY VARIABLE ASSIGNMENT
// old way
const name1 = 'codeup';
const person1 = {
    name: name,
    age: 4
};
// new shorthand
const name2 = 'codeup';
const person2 = {
    name,
    age: 4
};

// OBJECT DESTRUCTURING - CREATING VARIABLES FROM OBJECT PROPERTIES
// old way
var person3 = {name: 'codeup', age: 4};
var name3 = person.name;
var age3 = person.age;
console.log(name3); // 'codeup'
console.log(age3); // 4
// new way
const person4 = {name4: 'codeup', age4: 4};
const {name4, age4} = person4;
console.log(name4); // 'codeup'
console.log(age4); // 4
// new way
function tellMeAbout({name, age}) {
    console.log(name); // 'codeup'
    console.log(age); // 4
}
const person = {name: 'codeup', age: 4};
tellMeAbout(person);

// DESTRUCTURING ARRAYS
const myArray = [1, 2, 3, 4, 5];
const [x, y] = myArray;
console.log(x); // 1
console.log(y); // 2

// Map, filter, and reduce are all functions that operate on collections. All will not modify the original array, but instead, will return a new copy of the array.
// .map: transforms each element in the collection.
// .filter: filters our values, makes sure each element in the collection meets some criteria or passes some test.
// .reduce: reduces a collection to a single value.

// MAP & FILTER
// Used to solve common array iteration problems in a manner which produces less side effects.
// old
var numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens1 = [];
for (var i = 0; i < numbers5.length; i += 1) {
    if (numbers5[i] % 2 === 0) {
        evens1.push(numbers5[i]);
    }
}
console.log(evens1); // [2, 4, 6, 8, 10]

// FILTER
// For .filter, if the callback returns true, the element will be in the new collection, if it returns false, the element will not be part of the new collection.
var numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens2 = numbers6.filter(function(n) {
    return n % 2 === 0;
});
console.log(evens2); // [2, 4, 6, 8, 10]

// MAP
// The return value of the callback will be the new value of the element.
var numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var incremented = numbers7.map(function(n) {
    return n + 1;
});
console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// ABOVE EX IN ES6 SYNTAX
const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// MAP
const evens3 = numbers8.filter(n => n % 2 === 0);
console.log(evens3); // [2, 4, 6, 8, 10]
// FILTER
const incremented1 = numbers8.map(n => n + 1);
console.log(incremented1); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// REDUCE
// We define the callback passed to .reduce with 2 parameters: one representing the accumulation that we are creating, and the other representing each item in the array. We also specify an initial value for the accumulation (the second argument to .reduce).
const numbers9 = [1, 2, 3, 4, 5];

const sum = numbers9.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);
console.log(sum);

// ANOTHER EXAMPLE OF REDUCE ON OBJECT
const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);
console.log(totalSales);

// In addition, we can use .reduce to transform the shape of a collection. For example: let's say we have an array of words, and we want to count the number of occurrences for each word. We could transform our array of strings into an object whose property names are each word, and whose values are the number of times each word appears.
function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

