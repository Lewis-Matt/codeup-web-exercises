// Write a function that accepts the top three bowling scores and returns the average.
function bowlingAvg(score1, score2, score3) {
    if (typeof arguments === 'number') {
        console.log('Enter a numerical score 0 - 300');
    }
    return (score1 + score2 + score3) / arguments.length;
}

console.log(bowlingAvg(255, 100, 190).toFixed(0));

console.log('--------------------------------------');

// Write a function that accepts the best score and returns true if it's divisible by 3 or 5 and false if it’s not
let bestScore = score => score % 3 === 0 || score % 5 === 0;
console.log(bestScore(21));

console.log('--------------------------------------');

// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEver”) and returns it in all lower
// case BONUS: return it with a space between each word
function convertToLower(str) {
    return str.toLowerCase()
}

console.log(convertToLower('ThEbEsTbOwLiNgPlAcEver'));

console.log('--------------------------------------');

// Given these variables:
let score = 109;
let name = "bowlingIsFun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];

// Write a function that returns the type of each of the variables (call the function once per variable);
function determineType(yourVariable) {
    return (typeof yourVariable);
}

console.log(determineType(score));
console.log(determineType(name));
console.log(determineType(isBowlingFun));
console.log(determineType(players));

console.log('--------------------------------------');

// Write a function that executes all of the above functions
function executer() {
    console.log(bowlingAvg(155, 255, 187));
    console.log(bestScore(21));
    console.log(convertToLower('ThEbEsTbOwLiNgPlAcEver'));
    console.log(determineType(name));
}

executer();

console.log('--------------------------------------');

// Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
let myFunction = function (firstName, lastName) {
    return firstName + lastName
};

console.log(myFunction('Matt', 'Lewis'));

function thatsNotMyName(name) {
    if (name !== "Laura") {
        return "That's me!, I'm " + name;
    } else {
        return "That's not my name";
    }
}

console.log(thatsNotMyName('Matt'));