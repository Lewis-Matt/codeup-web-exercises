let maxSpots = 20;
let availableSpots = 0;
while(availableSpots < maxSpots) {
    availableSpots++
    console.log(`There are ${availableSpots} spot open out of a max of ${maxSpots} spots.`)
}

let usedSpots = 20;
while(usedSpots > 0) {
    usedSpots--;
    console.log(`There are ${20 - usedSpots} available.`)
}

// Loop through 0-50 by 2's
let num = 0
do {
    num = num + 2;
    console.log(num);
} while(num < 50);