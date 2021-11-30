"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(primaryColorName) {
//     primaryColorName = primaryColorName.toLowerCase();
//     if (primaryColorName == 'red') {
//         return `${primaryColorName} is the color of blood.`;
//     } else if (primaryColorName == 'yellow') {
//         return `${primaryColorName} is the color of bananas.`;
//     } else if (primaryColorName === 'blue') {
//         return `${primaryColorName} is the color of the ocean.`;
//     } else {
//         return `I don't know anything about ${primaryColorName}`;
//     }
// }
//
// console.log(analyzeColor('red'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(primaryColorName) {
    primaryColorName = primaryColorName.toLowerCase();
    switch (primaryColorName) {
        // Note that since each case has a return, a break is not needed (it will be unreachable)
        case 'red':
            return `${primaryColorName} is the color of blood.`;
        case 'yellow':
            return `${primaryColorName} is the color of bananas.`;
        case 'blue':
            return `${primaryColorName} is the color of the ocean.`;
        default:
            return `I don't know anything about ${primaryColorName}`;
    }
}

console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
function getUserColor() {
    return prompt('Enter a color.');
}

alert(analyzeColor(getUserColor()));

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0:
            return (totalAmount).toFixed(2);
        case 1:
            return (0.90 * totalAmount).toFixed(2);
        case 2:
            return (0.75 * totalAmount).toFixed(2);
        case 3:
            return (0.65 * totalAmount).toFixed(2);
        case 4:
            return (0.50 * totalAmount).toFixed(2);
        case 5:
            return (0.00).toFixed(2);
    }
}

console.log(calculateTotal(3, 50.5));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let userBill = prompt('What is your total bill?');
alert(`Your lucky number is ${luckyNumber}. \n 
Your bill before discount is $${userBill}. \n 
Your bill after discount is $${calculateTotal(luckyNumber, userBill)}`);

/**
 *
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userConfirm = confirm('Would you like to enter a number?');
if (userConfirm === true) {
    // prompt returns a string: parseInt in case the user enters a number as a string '54'
    let userNumber = parseInt(prompt('Enter a number.'), 0);
    // TESTING LOG
    console.log(typeof userNumber);
    // If userNumber is not typeOf Number (wasn't able to be parseInt to a number), alert the user
    if (isNaN(userNumber)) {
        alert('You did not enter a number');
        // If userNumber is a valid number
    } else {
        // Check for even or odd and alert user
        if (userNumber % 2 === 0) {
            alert('Your number is even.')
        } else {
            alert('Your number is odd.')
        }
        // Add 100 and alert user of the value
        alert(`Your number + 100 is ${(userNumber + 100)}`);
        // Check if userNumber is even or odd and alert the user.
        if (userNumber >= 0) {
            alert('Your number is positive.');
        } else {
            alert('Your number is negative.');
        }
    }
}
