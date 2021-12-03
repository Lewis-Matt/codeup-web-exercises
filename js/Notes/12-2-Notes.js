let maxSpots = 20;
let availableSpots = 0;
while (availableSpots < maxSpots) {
    availableSpots++
    console.log(`There are ${availableSpots} spot open out of a max of ${maxSpots} spots.`)
}
console.log('------------------------------');

// Another way
let usedSpots = 20;
while (usedSpots > 0) {
    usedSpots--;
    console.log(`There are ${20 - usedSpots} available.`)
}
console.log('------------------------------');

// Loop through 0-50 by 2's
let num = 0
do {
    num = num + 2;
    console.log(num);
} while (num < 50);
console.log('------------------------------');

// Loop through 1-10
let i = 0;
while (i <= 10) {
    console.log(i)
    i++;
}
console.log('------------------------------');

// Same thing with do
let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);
console.log('------------------------------');

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the correct password is given.
// Have to initialize password outside the function, otherwise (with let or const) the 'while' condition can't see the password variable.
// Or you could use var password = prompt... inside the do{}
/*

let password = '';
let userPassword = 'hunter1';
function checkPassword() {
    do {
        password = prompt("Enter your password");
    } while (password !== userPassword)
    alert('Correct');
}
checkPassword();
*/

// Nested for loop ex
for (let counter = 1; counter <= 5; counter++) {
    console.log(`1st counter: ${counter}`);
    for (let counter2 = 5; counter2 > 0; counter2--) {
        console.log(`2nd counter: ${counter2}`);
    }
}

