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
let hasLowerCase = str => str === str.toLowerCase();
console.log('hasLowerCase: ' + hasLowerCase('UPpER'));

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
console.log(`divide: ${(divide(7,3)).toFixed(2)}`);

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
let cubeRoot = n => Math.pow(n, 1/3);
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
console.log(`radiansToDegrees: ${radiansToDegrees((Math.PI)/4)}`);

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

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.


// SIMPLE FUNCTION DRILLS
// Make a function called returnTwo() that returns the number 2 when called

// Test this function with console.log(returnTwo())

// Make a function called sayHowdy() which console.logs the string “Howdy!”

// Test this function by directly calling sayHowdy()

// Remember this function does not need a defined return value

// Make a function called returnName() that returns the string of your name

// Test this function with console.log(returnName())

// Make a function called addThree() which takes in a number input and returns the number plus 3.

// Test this function with console.log(addThree(5))

// Make a function called sayString() which returns the string input passed in.

// Test this function with console.log(sayString('codeup'))

// CHALLENGE FUNCTION DRILLS
// Write a function called identity(input) that takes in an argument called input and returns that input.

// Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

// Write a function called first(input) that returns the first character in the provided string.

// Write a function called last(input) that returns the last character of a string

// Write a function called rest(input) that returns everything but the first character of a string.

// Write a function called reverse(input) that takes a string and returns it reversed.

// Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.

// Write a function called count(input) that takes in a string and returns the number of characters.

// Write a function called add(a, b) that returns the sum of a and b

// Write a function called subtract(a, b) that return the difference between the two inputs.

// Write multiply(a, b) function that returns the product

// Write a divide(numerator, denominator) function that returns a divided by b

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor

// Write the function square(a) that takes in a number and returns the number multiplied by itself.

// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

// EVEN MORE FUNCTION BONUSES
// Create a function that will return how many whitespace characters are at the beginning and end of a string.

// Create a function that takes in two string inputs.

// If the second string input is present in the first, return the first input string with the second input string removed from it.
// If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).

// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).

// Create a function returnTrueMessage() that returns the string "Hey, it's true!"

// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.

// The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.
