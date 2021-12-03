// Array notes
"use strict";

// Create array of students
let students = ["Gerald", "Mark", "Mina", "Jason", "Justin", "Justin"];
console.log(students.length);

// Create array of fav foods
let favFoods = ["Boiled Goose", "Sweet Baby Rays", "Chicken Nugs", "Potatoes", "Borsch"];
console.log(favFoods);

// Get name of a specific student
console.log(students[3]);

// Concat last name to first name
// students[4] = students[4] + " Sebastian"
// console.log(students[4]);
// console.log(students);

// Give favFoods a rating
favFoods[0] += " 5";
favFoods[1] += " 3";
favFoods[2] += " 3";
favFoods[3] += " 4";
favFoods[4] += " 1";
console.log(favFoods);

// Note that indexOf returns the first time the element occurs, starting from the beginning
console.log(students.indexOf("Justin"));
// Searches from the end of the array to the beginning and returns the 1st time the element occurs
console.log(students.lastIndexOf("Justin"));

// Arrays in arrays (2nd order, 3rd order, etc.)
let matt = ['Matt', 37, 'San Antonio', ["Boiled Goose", "Sweet Baby Rays", "Chicken Nugs", "Potatoes", "Borsch"], 2021];
console.log(matt[3][2]);