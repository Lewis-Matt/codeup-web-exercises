'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
//setInterval()

let count = 0;
let max = 10;
let interval = 1000; // interval time in milliseconds

let intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

// the setInterval() function takes in a function and an interval as parameters and returns an interval id. The function will continue to be
// executed at the interval until clearInterval() is called with the correct interval id. Intervals should be specified in milliseconds.

// setTimeout()
let delay = 5000; // delay time in milliseconds

let timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// to cancel the timeout, you can call clearTimeout(timeoutId); prior to the delay expiring
// It takes in a function and a delay, and the function will get executed one time at the end of the delay time. To cancel the function
// execution, clearTimeout() can be called passing the timeout id that was returned by the setTimeout() method.

// LOCATION
// redirect browser to google.com
window.location = 'http://www.google.com';
// reload page, possibly from cache
location.reload();
// reload page from server
location.reload(true);