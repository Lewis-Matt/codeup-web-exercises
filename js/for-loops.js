"use strict";
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for
// that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(num + ' x ' + i + ' = ' + (num * i));
    }
}

showMultiplicationTable(10);

console.log('---------------------------------------')
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to
// the console whether each number is odd or even.

// Random number between 20 - 200 (both inclusive)
function random() {
    return Math.floor(Math.random() * (200 - 20 + 1) + 20);
}

// Determines if a random number is even or odd
function evenOrOdd() {
    // Initialize empty number array
    let num = [];
    // Generates 10 random numbers
    for (let i = 0; i <= 10; i++) {
        // Puts random number in array
        num[i] = random();
        // If the number is even, else the number is odd
        if (num[i] % 2 === 0) {
            console.log(num[i] + ' is even');
        } else {
            console.log(num[i] + ' is odd');
        }
    }
}

evenOrOdd();

console.log('---------------------------------------')
// Create a for loop that uses console.log to create the output shown below.
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

function pyramid() {
    let print = '';
    // Outer loop is columns
    for (let i = 1; i <= 9; i++) {
        // Inner loop is rows
        for (let j = 0; j < i; j++) {
            print += i;
        }
        print += '\n';
    }
    console.log(print);
}

pyramid();

console.log('---------------------------------------')
// Create a for loop that uses console.log to create the output shown below.
//
// 100
// 95
// 90
// 85
// ...
// 5

function minusFive() {
    let num = 105;
    for (let i = 0; num > 5; i++) {
        num = num - 5;
        console.log(num);
    }
}

minusFive();
