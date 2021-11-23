// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served, but all the remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values to be true

let isAtBar = false;
let bac = .00;
let age = 22;
let cashOnHand = 7.99;

/* Original code
let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink){ // true or false
    console.log("Have a brewski my dude!");
}else{ // it was not true
    console.log("Sorry buddy, no brew for u");
}
*/

// We could delete isAtBar as that condition doesn't matter anymore, but it may be useful data to keep
let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink && isAtBar) { // true or false
    console.log("Have a brewski my dude!");
} else if (canHaveADrink && !isAtBar) { // it was not true
    console.log("Have a brewski my dude!");
} else {
    console.log("Sorry buddy, no brew for u");
}

// Write a function with 2 arguments - determine if today is a good day to fly
// if it is not cloudy, and there are less than 10 planes scheduled, it is a good day to fly

let cloudsPresent = true;
let numberPlanes = 11;

function letUsFly(clouds, planes) {
    if (clouds === true && planes < 10) {
        console.log('It is a good day to fly');
    } else {
        console.log('No flying today');
    }
}

letUsFly(cloudsPresent, numberPlanes);
