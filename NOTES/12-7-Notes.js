"use strict";
// Math object notes
console.log('--------------Random----------------')

// Random between 0 and 1
console.log(Math.random())

console.log('-----------Random Float-------------')

// Random float, max not inclusive
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomFloat(0, 25));

console.log('----------Random Integer------------')

// Random int, max not inclusive
function getRandomInt(min, max) {
    return Math.floor(getRandomFloat(min, max));
}

// There is also Math.ceil(), Math.round()
console.log(getRandomInt(0, 25));

// Math.pow(x,y) is the same as (x ** y)

// Floating point immersion
console.log(0.1 * 0.2);
// 0.020000000000000004
console.log(((10 * .01) * (10 * 0.2)) / 10);
// 0.02
// This has to do with bit-wise operations at the binary level