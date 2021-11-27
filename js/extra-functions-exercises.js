// FUNCTIONS USING CONDITIONALS BUT NOT LOOPS OR ARRAYS:
// Make a function named isOdd(number)
function isOdd(number) {
    return !(number % 2 == 0);
}

console.log('isOdd: ' + isOdd(2));

// Make a function named isEven(number)
function isEven(number) {
    return (number % 2 == 0);
}

console.log('isEven: ' + isEven(2));

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}

console.log('identity: ' + identity("Matt"));

// Make a function named isFive(input)
function isFive(input) {
    return (input == 5);
}

console.log('isFive: ' + isFive('five'));

// Make a function named addFive(input) that adds five to some input.
let addFive = input => input + 5;
console.log('addFive: ' + addFive(5));

// Make a function named isMultipleOfFive(input)
let isMultipleOfFive = input => input % 5 == 0;
console.log('isMultipleOfFive: ' + isMultipleOfFive(13));

// Make a function named isThree(input)
let isThree = input => input == 3;
console.log('isThree: ' + isThree(3));

// Make a function named isMultipleOfThree(input)
let isMultipleOfThree = input => input % 3 == 0;
console.log('isMultipleOfThree: ' + isMultipleOfThree(9));

// Make a function named isMultipleOfThreeAndFive(input)
let isMultipleOfThreeAndFive = input => (input % 3 == 0) && (input % 5 == 0);
console.log('isMultipleOfThreeAndFive: ' + isMultipleOfThreeAndFive(10));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
let isMultipleOfTarget = (target, n) => (target % n) == 0;
console.log('isMultipleOfTarget: ' + isMultipleOfTarget(10, 3));

// Make a function named isTrue(boolean)
let isTrue = boolean => boolean === true;
console.log('isTrue: ' + isTrue(true));

// Make a function named isFalse(boolean)
let isFalse = boolean => boolean === false;
console.log('isFalse: ' + isFalse(true));

// Make a function named isTruthy(input), remember that values other than true will behave like true
/* Truthy values
    if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)
*/
let isTruthy = (input) => true;
console.log('isTruthy: ' + isTruthy(1));

// Make a function named isFalsy(input), remember that values other than false behave like false
/* Falsy values
    if (false)
    if (null)
    if (undefined)
    if (0)
    if (-0)
    if (0n)
    if (NaN)
    if ("")
*/
function isFalsy(input) {
    return !input;
}

console.log('isFalsy: ' + isFalsy(''));

// Make a function named isVowel(letter)
function isVowel(letter) {
    // Convert case so we don't have to write more conditions
    letter.toLowerCase();
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y';
}

console.log('isVowel: ' + isVowel('p'));

// Make a function named isConsonant(letter)
function isConsonant(letter) {
    // Convert case so we don't have to write more conditions. Same as isVowel only with a bang(!)
    letter.toLowerCase();
    return !(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y');
}

console.log('isConsonant: ' + isConsonant('e'));

// Make a function named isCapital(letter)
let isCapital = letter => letter === letter.toUpperCase();
console.log('isCapital: ' + isCapital('a'));

// Make a function named isLowerCase(letter)
let isLowerCase = letter => letter === letter.toLowerCase();
console.log('isLowerCase: ' + isLowerCase('A'));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Apparently, even though it is not reserved, we cannot use 'string' as the input/parameter. There is a String object...
// EDIT: changed from string === string.toLowerCase(). This checks if the string is modifiable by .toUpperCase(), and if
// it is modifiable, it means that a lowercase letter was in the string.
let hasLowerCase = string => string.toUpperCase() !== string;
console.log('hasLowerCase: ' + hasLowerCase('UPPER'));

// Make a function named isSpace(letter) that returns if a character is a space character
let isSpace = letter => letter === ' ';
console.log('isSpace: ' + isSpace(' '));

// Make a function named isZero(number)
function isZero(number) {
    return (number === 0);
}

// IDEA "string concatenation is used instead of template literals" and automatically changed it to a template literal:
console.log(`isZero: ${isZero(0)}`);

// Make a function named notZero(input) that returns true if the input is not zero
let notZero = input => !(input === 0);
console.log(`notZero: ${notZero(1)}`);

// Write a function named lowerCase(string)
let lowerCase = str => str.toLowerCase();
console.log(`lowerCase: ${lowerCase('UPPERCASE')}`);

// Write a function named double(n) that returns a number times two
let double = n => n * 2;
console.log(`double: ${double(7)}`);

// Write a function named triple(n) that returns a number times 3
let triple = n => n * 3;
console.log(`triple: ${triple(7)}`);

// Write a function named quadruple(n) that returns a number times 4
let quadruple = n => n * 4;
console.log(`quadruple: ${quadruple(7)}`);

// Write a function named half(n) that returns 1/2 of the provided input
let half = n => n / 2;
console.log(`half: ${half(7)}`);

// Write a function named subtract(a, b) that returns a minus b
let subtract = (a, b) => a - b;
console.log(`subtract: ${subtract(7, 3)}`);

// Write a function named multiply(a, b) that returns the product of a times b
let multiply = (a, b) => a * b;
console.log(`multiply: ${multiply(7, 3)}`);

// Write a function named divide(a, b) that returns a divided by ~b~
let divide = (a, b) => a / b;
console.log(`divide: ${(divide(7, 3)).toFixed(2)}`);

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
let remainder = (a, b) => a % b;
console.log(`remainder: ${remainder(7, 3)}`);

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// ISN'T THIS THE SAME AS THE LAST QUESTION?
let modulo = (a, b) => a % b;
console.log(`modulo: ${modulo(7, 3)}`);

// Write a function named cube(n) that returns n * n * n
let cube = n => n ** 3;
console.log(`cube: ${cube(3)}`);

// Write a function named squareRoot(n) that returns the square root of the input
let squareRoot = n => Math.sqrt(n); // or n ** (1/2)
console.log(`squareRoot: ${squareRoot(100)}`);

// Write a function named cubeRoot(n) that returns the cube root of the input
let cubeRoot = n => Math.pow(n, 1 / 3);
console.log(`cubeRoot: ${cubeRoot(27)}`);

// Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.
function invertSign(number) {
    return number * -1;
}

console.log(`invertSign: ${invertSign(-3)}`);

// Write a function named degreesToRadians(number)
// (π/180) * degrees
let degreesToRadians = degrees => degrees * (Math.PI / 180);
console.log(`degreesToRadians: ${(degreesToRadians(360)).toFixed(4)}`);

// Write a function named radiansToDegrees(number)
// (180/π) * radians
let radiansToDegrees = radians => radians * (180 / Math.PI);
console.log(`radiansToDegrees: ${radiansToDegrees((Math.PI) / 4)}`);

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(input) {
    if (input === '/t' || input === '/s' || input === '/n') {
        return true;
    }
}

console.log(`isBlank: ${isBlank('/n')}`);

// Make a function named trim(string) that removes empty spaces before and after the input.
let trim = str => str.trim();
console.log(`trim: ${trim('   No more spaces before and after.   ')}`);

// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
let areEqual = (input1, input2) => input1 == input2;
console.log(`areEqual: ${areEqual(30, '30')}`);

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
let areIdentical = (input1, input2) => input1 === input2;
console.log(`areIdentical: ${areIdentical(30, '30')}`);

// Make a function named not(input) returns the input with a flipped boolean
let not = input => !input;
console.log(`not: ${not(true)}`);

// Make a function named notNot(input) that the negation of the negation of the input.
// I decided to use the previous function rather than !!
let notNot = input => !not(input);
console.log(`notNot: ${notNot(true)}`)

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Predicate: A function that, when called, returns either true or false.
function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

console.log(`and: ${and(true, false)}`);

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}

console.log(`or: ${or(true, false)}`);

// Write a function called reverseString(string) that reverses a string
// .split() splits a string into an array of strings separated by (' ')
// .reverse() reverses the strings (by index) in the array
// .join() joins the elements of an array into a string, separated by(' ')
let reverseString = str => str.split(' ').reverse().join(' ');
console.log(`reverseString: ${reverseString('am I out, this Figuring')}`);

// Make a function named absoluteValue(number) that returns the absolute value of a number.
// W/o Math.abs: if (number < 0) { return number * -1}
let absoluteValue = number => Math.abs(number);
console.log(`absoluteValue: ${absoluteValue(-5)}`);

// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have.
// Generate a random number between 1 up to and including the number of sides.
// Math.random generates a number between 0 and 1, that isn’t a whole number, and also isn’t 1. If I wanted a number between
// 0 - 10, I would multiply random() * 10. To get an integer, I apply Math.floor(Math.random() * 10)
// To get a number between 1 - 10, I add 1 (the min) to it. To make the 10 (max) inclusive; I subtract the min and add 1:
// sides - min + 1 -> (6 - 1 + 1) = 6
function rollDice(sides) {
    const min = 1;
    return Math.floor(Math.random() * (sides - min + 1) + min);
}

console.log(`rollDice: ${rollDice(6)}`);


// SIMPLE FUNCTION DRILLS
// Make a function called returnTwo() that returns the number 2 when called
let returnTwo = () => 2;
// Test this function with console.log(returnTwo())
console.log(`returnTwo: ${returnTwo()}`);

// Make a function called sayHowdy() which console.logs the string “Howdy!”
// Remember this function does not need a defined return value
let sayHowdy = () => console.log('Howdy');
// Test this function by directly calling sayHowdy()
sayHowdy();

// Make a function called returnName() that returns the string of your name
let returnName = () => 'Matt Lewis';
// Test this function with console.log(returnName())
console.log(returnName());

// Make a function called addThree() which takes in a number input and returns the number plus 3.
let addThree = number => number + 3;
// Test this function with console.log(addThree(5))
console.log(`addThree: ${addThree(7)}`);

// Make a function called sayString() which returns the string input passed in.
let sayString = string => string;
// Test this function with console.log(sayString('codeup'))
console.log(`sayString: ${sayString('codeup')}`);

// CHALLENGE FUNCTION DRILLS
// Write a function called identity(input) that takes in an argument called input and returns that input.
/******* SEE LINE 16 **********/

// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
// Max is not inclusive
let getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);
console.log(`getRandomNumber: ${getRandomNumber(0, 7)}`);

// Write a function called first(input) that returns the first character in the provided string.
function first(input) {
    return input.charAt(0);
}

console.log(`first: ${first('Butler')}`);

// Write a function called last(input) that returns the last character of a string
let last = input => input.charAt(input.length - 1);
console.log(`last: ${last('Butler')}`);

// Write a function called rest(input) that returns everything but the first character of a string.
// Can use .substring(start, stop) or .slice(start, stop). See https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
let rest = input => input.substring(1);
console.log(`rest: ${rest('Blog')}`);

// Write a function called reverse(input) that takes a string and returns it reversed.
// Split string into array of chars, reverse the order of the array, join the elements as a single string
let reverse = input => input.split('').reverse().join('');
console.log(`reverse: ${reverse('wehttaM')}`);

// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
let isNumeric = input => typeof input === 'number';
console.log(`isNumeric: ${isNumeric(9)}`);

// Write a function called count(input) that takes in a string and returns the number of characters.
let count = input => console.log('count: ' + input.length);
count('How many characters?');

// Write a function called add(a, b) that returns the sum of a and b
let add = (a, b) => a + b;
console.log(`add: ${add(3, 7)}`);

/******* The below exercises are duplicates from above
 Write a function called subtract(a, b) that return the difference between the two inputs.
 Write multiply(a, b) function that returns the product
 Write a divide(numerator, denominator) function that returns a divided by b
 Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
 *******/

// Write the function square(a) that takes in a number and returns the number multiplied by itself.
let square = a => a * a;
console.log(`square: ${square(7)}`);

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
let sumOfSquares = (a, b) => add(square(a), square(b));
console.log(`sumOfSquares: ${sumOfSquares(7, 3)}`);

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply.
// a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            console.log("Error: you must enter '+', '-', '*', '/'");
    }
}

console.log(`doMath ${doMath('*', 7, 3)}`)


// EVEN MORE FUNCTION BONUSES
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
// I would normally user a for loop, but I haven't used a while loop in a while, so here we go:
function whitespaceCounter(str) {
    let counter = 0;
    let i = 0;
    while (i <= str.length) {
        if (str.charAt(i) === ' ') {
            counter = counter + 1;
        }
        i = i + 1;
    }
    return counter;
}

console.log(`whitespaceCounter: ${whitespaceCounter(' There is 11 whitespace   in this sentence . ')}`);

// Create a function that takes in two string inputs.
// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
// There HAS GOT to be a shorter method of doing this, perhaps with string.includes() (there is also an array.includes() method).........."
function messingWithStrings(str1, str2) {
    // Split str1 into an array of words
    let str1Split = str1.split(' ');
    // TESTING LOG
    console.log(str1Split);
    // Counter for counting how many times str2 occurs
    let str2Count = 0;
    // Loop though each word in the str1Split array
    for (let i = 0; i < str1Split.length; i++) {
        // Test each element of str1Split array for a match with str2
        if (str2 === str1Split[i]) {
            // Increase the counter for str2 occurrence
            str2Count++;
            // TESTING LOG
            console.log('str2Count: ' + str2Count);
        }
    }
    // If str2 occurs more than once in str1, remove the first occurrence
    if (str2Count > 1) {
        // Find the index of the first occurrence of str2
        const index = str1Split.indexOf(str2);
        // TESTING LOG
        console.log('First index of str2: ' + index);
        // Remove the first occurrence from the str1Split array
        // Note that splice() modifies the original array in-place. If I were to return str1Split.splice(index, 1) it would
        // just return the removed element
        str1Split.splice(index, 1);
        return str1Split.join(' ');
    }
    // If str2 occurs only once, or not at all, return str1
    return str1;
}

console.log(`messingWithStrings: ${messingWithStrings('Hello Matt Matt you sly fox.', 'Matt')}`);

// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
function endsWithA(str) {
    if (str.charAt(str.length - 1) === 'a') {
        return true;
    }
    return false;
}

console.log(`endsWithA: ${endsWithA('Funky')}`);

// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
function whitespaceCheck(str) {
    // match(REGEX) will return all the occurrences of a string (that matches the regex) into an array
    // By counting the array size (.length) we know how many times the regex occurred.
    // ^ means starts with, the * means to return 0 or more occurrences, g means to search the entire str
    console.log((str.match(/^\s*/g)[0]).length);
}

whitespaceCheck('   hi there, Matt');

// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
let returnTrueMessage = () => "Hey, it's true!";
console.log(`returnTrueMessage: ${returnTrueMessage()}`);

// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
let returnFalseMessage = () => "Hey, it's false!";
console.log(`returnFalseMessage: ${returnFalseMessage()}`);

// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
function returnMessage() {
    return function (str) {
        console.log(str);
    }
}

// What's happening here is that it is returning the reference of the inner function, so we need to put () again so the function reference is executed.
returnMessage()('Is this what I am supposed to do?');

// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
// The function will return true if the username is not the same as the password and the user is at least 18 years old.
// If the user is an admin, they do not have to be a certain age but the password must still not match the username.
function willLoginUser(username, password, age, admin) {
    if (admin === true && password != username) {
        console.log('You are logged in as ADMIN');
    } else if (admin === false && password != username && age >= 18) {
        console.log('You are logged in as USER');
    } else {
        console.log('Login not valid');
    }
}

willLoginUser('Matt', 'funkyfresh', 15, true);

// I AM DONE (and everything works!)!