// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for (let i = 0; i < Infinity; i++) {
    let userNum = prompt('Enter an odd number between 1 - 50.');
    if (userNum % 2 !== 0 && userNum < 50 && userNum >= 1) {
        break;
    }
}
// Below is a better method:
// let userOddNum;
// do {
//     userOddNum = prompt('Enter an odd number between 1 - 50.');
// } while (userOddNum % 2 === 0 || userNum > 50 || userNum < 1);

for (let j = 0; j < 50; j++) {
    if (j % 2 !== 0) {
        if(j === userNum) {
            continue;
        }
        console.log(j);
    }
}



