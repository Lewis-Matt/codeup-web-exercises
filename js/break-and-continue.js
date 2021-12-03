// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
let userNum;
for (let i = 0; i < Infinity; i++) {
    // Prompt returns a string, this was messing with the === condition on line 19
    userNum = prompt('Enter an odd number between 1 - 50.');
    if (userNum % 2 !== 0 && userNum < 50 && userNum >= 1) {
        break;
    }
}
// Below is a better method:
// let userOddNum;
// do {
//     userOddNum = prompt('Enter an odd number between 1 - 50.');
// } while (userOddNum % 2 === 0 || userNum > 50 || userNum < 1);

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
console.log('Number to skip: ' + userNum)
for (let j = 0; j < 50; j++) {
    // Using == since prompt(line 5) returns a string. Could convert to number(prompt...), but this will allow the user to input '5'
    if (j == userNum) {
        console.log('Skipping: ' + userNum);
        continue;
    }
    // Check if current iteration is odd
    if (j % 2 !== 0) {
        console.log('Odd: ' + j);
    }
}



