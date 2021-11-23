// Display a num as float
let wholeNum = 15;
console.log(wholeNum.toFixed(4));

// Ex 2

let sample = "Hello Codeup";

// Use length to find length of string
console.log(sample.length);

// Convert to uppercase
console.log(sample.toUpperCase());

// Concatenate
sample = sample + " Students";
console.log(sample);

// Find the index of a character
console.log(sample.indexOf('C'));

// Retrieve substring with 'Codeup' using .indexOf and .substring
let firstLetterCodeup = sample.indexOf('C');
let subSample = sample.substring(firstLetterCodeup, 12);
console.log(subSample);

////////////////////////////////////// Ex 3 //////////////////////////////////////////

/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay? */
const pricePerDay = 3;
let total = pricePerDay * (3 + 5 + 1)
console.log(total);


/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours
for Facebook, 6 hours for Google and 4 hours for Amazon. */
const google = 400;
const amazon = 380;
const facebook = 350;
let payment = (facebook * 10) + (google * 6) + (amazon * 4);
console.log(payment);


// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
const classSize = 30;
let openSeats = 20;
let conflict = true;

function enroll() {
    if (openSeats < classSize && conflict === false) {
        console.log("you can enroll")
    } else {
        console.log("you cannot enroll");
    }
}

enroll();


/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products. */

// Constants for checking expiration
const expiration = new Date(2022, 9, 22);
const todaysDate = new Date();
// User/cashier/shopify/etc. would input these items
let itemsBought = 1;
// Is the user a Premium member? If true, then itemsBought doesn't matter
let premium = true;

function offer() {
    if ((itemsBought > 2 || premium === true) && todaysDate < expiration) {
        console.log("Offer applied");
    } else {
        console.log("Offer not applied");
    }
}

offer();

// Ex 4

const username = 'codeup';
const password = 'notastrongpasswordadfafas';

/*
Create a variable that holds a boolean value for each of the following conditions:
the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace
*/

function checkCredentials(username, password) {
    // Check length of password
    if (password.length >= 5) {
        console.log("password length good");
    } else {
        return console.log("password too short");
    }

    // Check that password is not the same as username
    if (password !== username) {
        console.log("password does not equal username");
    } else {
        return console.log("password cannot be the same as username");
    }

    // Check that username is not longer than 20 characters
    if (username.length <= 20) {
        console.log("username length good");
    } else {
        return console.log("username too long");
    }

    // Check for whitespace
    if (username.indexOf(' ') === 0 && password.indexOf(' ') === 0) {
        console.log("whitespace check good");
    } else {
        return console.log("whitespace not allowed");
    }
}

checkCredentials(username, password);