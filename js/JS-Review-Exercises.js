// ========== Conditional Logic and Functions

// Write a function that takes in a number and returns triple the value of the passed number. Assume only number inputs.
function triple(num) {
    Number(num);
    if (!isNaN(num)) {
        return num * 3;
    } else {
        return 'not a number';
    }
}

console.log(triple('fifteen'));
console.log('---------------Next Exercise---------------');
// Modify the above function to work with numeric strings as well.
// Modify the above function to return a string output of 'not a number' if the input is not a number or numeric string.

// Write a function that takes in a number and string and returns the string 'matches length' if the passed number is the length of the passed string and returns 'no length match' otherwise.
function lengthChecker(str, length) {
    if (str.length === length) {
        return 'matches length';
    }
    return 'no length match';
}

console.log(lengthChecker('matt', 5));
console.log('---------------Next Exercise---------------');
// (CHALLENGE) Write a function that takes in a day of the week as a string and returns the number that matches the day of the week. 'Sunday' should return 1 and 'Saturday' should return 7.
let daysOfWWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dayChecker(day) {
    return daysOfWWeek.indexOf(day) + 1;
}

console.log(dayChecker('Tuesday'));
console.log('---------------Next Exercise---------------');
// ========== + Loops

// Write a function that takes in a string input and logs each character of the string separately
function lettersInString(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

lettersInString('This is a string');
console.log('---------------Next Exercise---------------');

// Write a function that takes in a string and logs it 133 times
function lee(str) {
    let i = 0;
    while (i <= 133) {
        console.log(`${i}: ${str}`);
        i++;
    }
}

lee('duck');
console.log('---------------Next Exercise---------------');
// Write a function that takes in a string input and logs the first character, then the first two characters, etc., until the full string is logged.
/*
Example Input: 'Codeup'
Example Output:

"C"
"Co"
"Cod"
"Code"
"Codeu"
"Codeup"
*/

function charLogger(str) {
    let i = 0;
    let newString = '';
    while (i < str.length) {
        newString += str[i];
        console.log(newString);
        i++;
    }
}

charLogger('Codeup');
console.log('---------------Next Exercise---------------');
// (CHALLENGE) Write a function that takes in two string inputs and for each letter in the first string, logs how many times that given letter appears in the second string. It should be case-insensitive. If a letter appears more than once in the first string, the output should simply log the same message as many times as it appears in the first string.
/*

Example Inputs: "Codeup", "Coding Challenges"
Example Output:

'C' appears in 'Coding Challenges' 2 time(s)
'o' appears in 'Coding Challenges' 1 time(s)
'd' appears in 'Coding Challenges' 1 time(s)
'e' appears in 'Coding Challenges' 2 time(s)
'u' appears in 'Coding Challenges' 0 time(s)
'p' appears in 'Coding Challenges' 0 time(s)
*/

function letterChecker(str1, str2) {
    // Normalize and separate into arrays of chars
    let str1Array = str1.toLowerCase().split('');
    let str2Array = str2.toLowerCase().split('');
    // Loop through str1
    for (let i = 0; i < str1.length; i++) {
        // Loop through str2
        let str1Count = 0;
        for (let j = 0; j < str2.length; j++) {
            if (str1Array[i] === str2Array[j]) {
                str1Count++;
                console.log(`${str1[i]} appears in '${str2}' ${str1Count} time(s)`);
            }
        }
    }
}

letterChecker('Codeup', 'Coding Challenges');

// Try this
// var str = "A,B,C,D,E";
// var ch = ',';
//
// var count = [...str].filter(x => x === ch).length;
// console.log(count);
console.log('---------------Next Exercise---------------');
// ========== + Arrays

// Write a function that takes in two inputs and returns an array with those two inputs
// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
function toArray(input1, input2) {
    return [...arguments];
}

console.log(toArray('duck', 7));
console.log('---------------Next Exercise---------------');

// Write a function that takes in and array and another input and returns true if the value of the second input is an element in the first input array
function checkIfInArray(arr, input) {
// Loop through each index of arr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input) {
            return true;
        }
    }
    return false;
}

console.log(checkIfInArray([6, 8, 7, 5, 3, 0, 9], 3));
console.log('---------------Next Exercise---------------');

// Write a function that takes in an array of numbers and returns the lowest number. Assume only number element values and an array of at least two numbers.
let testArray = [1234, 1236, 747, 31234, 722, 285946, 26, 151, 61];

function lowest(arr) {
    return Math.min(...arr)
}

console.log(lowest(testArray));
// Another solution is const min = arr.reduce((a, b) => Math.min(a, b)): reduce does the callback function on every element of the array.
console.log('---------------Next Exercise---------------');

// Write a function that takes in an array of numbers and returns the product of the lowest and highest number. Assume only number element values and an array of at least two numbers.
function productOfExtremes(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return min * max;
}

// Uses testArray from 151
console.log(productOfExtremes(testArray));
console.log('---------------Next Exercise---------------');

// Write a function that takes in an array of numbers and returns the sum of the lowest two numbers. Assume only number element values and an array of at least two numbers.

function sumTwoMins(arr) {
    // Sorts an array in-place. If the return (i.e. a-b) is < 0, it sorts a before b. If it is > 0, sorts b before a.
    arr.sort(function (a, b) {
        return a - b;
    });
    // The shift() method removes the first item of an array.
    // The shift() method changes the original array.
    // The shift() method returns the shifted element.
    let min1 = arr.shift();
    let min2 = arr.shift();
    return min1 + min2;
}

console.log(sumTwoMins(testArray));
console.log('---------------Next Exercise---------------');

// Write a function that takes in an array of strings and returns the first two words as a string concatenated together with a dash. Assume at least three string elements in the passed array.
/*
Example Input: ['cat', 'dog', 'fish']
Example Output: 'cat-dog'
*/
function concatTwoWords(arr) {
    return arr[0] + '-' + arr[1];
}

console.log(concatTwoWords(['cat', 'dog', 'fish']));
console.log('---------------Next Exercise---------------');


// (CHALLENGE) Write a function that takes in an array of strings and returns the array of strings sorted from shortest to longest string
function sortByLength(arr) {
    arr.sort((a, b) => {
        return a.length - b.length;
    });
    return arr;
}

console.log(sortByLength(['pumpkin', 'spice', 'coffee', 'is', 'delicious']));
console.log('---------------Next Exercise---------------');

// ========== + Objects
// Write a function that takes in an object and returns the object with an added property called 'extra' and a value of 'extra value'
let testObj = {
    apple: 'doctor',
    chicken: 'nugs'
}

function addProperty(obj) {
    testObj.extra = 'extra value';
    return testObj;
}

console.log(addProperty(testObj));
console.log('---------------Next Exercise---------------');
// Assume for the next questions, this can be used as the array of user objects:

const users = [
    {
        name: 'Justin',
        occupation: 'Web Developer',
        averageAnnualPizzasOrdered: 22
    },
    {
        name: 'Cathy',
        occupation: 'Web Developer',
        averageAnnualPizzasOrdered: 15
    },
    {
        name: 'Fred',
        occupation: 'Data Engineer',
        averageAnnualPizzasOrdered: 35
    },
    {
        name: 'Mary',
        occupation: 'DBA',
        averageAnnualPizzasOrdered: 10
    }
];


// Write a function that takes in an array of user objects and returns the user object of the user with the longest name
// https://flexiple.com/loop-through-object-javascript/
function longestUserName(arrOfObjects) {
    // Variable to keep track of user object with the longest name
    let userWithLongestName = {};
    // Variable to compare length of username to
    let lengthOfLongestName = 0;
    // Loop through array of objects
    for (let i = 0; i < arrOfObjects.length; i++) {
        // Check the length of the value of each property called 'name'
        if (arrOfObjects[i].name.length > lengthOfLongestName) {
            // If the username is longer than the length of the name stored in the comparator variable, set this user as the one with the longest name
            userWithLongestName = arrOfObjects[i];
            return userWithLongestName;
        }
    }
}

console.log(longestUserName(users));
console.log('---------------Next Exercise---------------');
// Write a function that takes in an array of user objects and returns the 'Web Developer' with highest averageAnnualPizzasOrdered value


console.log('---------------Next Exercise---------------');
// Write a function that takes in an array of user objects and returns the same array of user objects without the 'averageAnnualPizzasOrdered' properties


console.log('---------------Next Exercise---------------');
// (CHALLENGE) Write a function that takes in an array of user objects, increases the value of averageAnnualPizzasOrdered by 5 for each user and returns the average annual pizzas ordered across all users, after this adjustment.



















