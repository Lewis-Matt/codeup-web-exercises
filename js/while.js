// Create a while loop that uses console.log() to create the output shown below.
//
// 2
// 4
// 8
// ... n^2
// 32768
// 65536 (2^256)

let i = 1;
while (i < 65536) {
    console.log(i = i * 2);
}

console.log('------------------------------------');
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to
// sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

// Generates random number between 50 - 100
let coneInventory = Math.floor(Math.random() * 50) + 50;
// TESTING LOG
console.log(coneInventory);
let conesSold = 0;
do {
    conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold < coneInventory) {
        console.log(`${conesSold} cones sold.`);
    } else if (conesSold > coneInventory) {
        console.log(`I cannot sell you ${conesSold}, I only have ${coneInventory} left.`)
    } else {
        console.log("All cones have been sold");
    }
    coneInventory -= conesSold;
} while (coneInventory >= 0);