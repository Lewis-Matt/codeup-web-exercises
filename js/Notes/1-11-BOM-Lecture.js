'use strict';

let sirius = {
    numStudents: 30,
    classroom: "Pedernales/remote",
    takeAttendance: function () {
        prompt('How many students?');
        return this.numStudents;
    },
}
// sirius.takeAttendance();


// SET INTERVAL
// Method of the BOM
// First parameter of setInterval function is a handler function, second parameter is the interval
let count = 0;
let max = 10;
let interval = 1000; // milliseconds

let intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All Done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

// Open console in browser to see what this is doing. Repeats line 27 ten times. Could use alerts.

