"use strict";

// A promise represents an event that might not yet have happened. A promise will be in one of three states:
//
//     pending: the event has not yet happened.
//     resolved: the event has happened successfully.
//     rejected: the event has happened, and an error condition occurred.

// The fetch function is one alternative to using jQuery to make AJAX requests. It will accept a url (and optionally, a configuration object), and return a promise representing the AJAX request.

fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));

// A promise object has two frequently used methods:
//
//     .then: accepts a callback that will run when the promise is resolved.
//     .catch: accepts a callback that will run when the promise is rejected.

// A promise is just a JavaScript object, we can store them in variables, and return them from functions. So we could rewrite the above code like so:
const myPromise = fetch('https://api.github.com/users');
myPromise.then(response => console.log(response));
myPromise.catch(error => console.error(error));

const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

Promise.all([githubPromise, bitbucketPromise])
    .then(function (data) {
        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .catch(function (error) {
        // handle errors
    });

// Promise.all: accepts an array of promises, and resolves when all the individual promises have resolved.
// Promise.race: accepts an array of promises, and resolves when the first promise resolves

// The return value from a promise's callback can itself be treated as a promise, which allows us to chain promises together.

Promise.resolve('one').then((one) => {
    console.log(one);
    return 'two';
}).then((two) => {
    console.log(two);
    return 'three';
}).then((three) => {
    console.log(three);
});

// Here we are using Promise.resolve to immediately return a resolved promise with the passed value, in this case the string, 'one'. We then return more string literals from the functions passed to the .then methods, allowing us to chain the promises together.
//
// To illustrate promise chaining further, let's imagine that we want to work with a list of usernames returned from the GitHub API.
//
// The response object resolved from the fetch method's promise has a .json method that returns another promise that resolves with the response body parsed as JSON. We can use this to further manipulate the results of our AJAX call.

fetch('https://api.github.com/users').then(response => {
    response.json().then(users => {
        users.forEach(user => {
            // do something with each user object...
            console.log(user);
        });
        // could also do something with the username login
        users.forEach(userObj => {
            // do something with the username login
            console.log(userObj.login);
        });
    });
});

// Clean up the above with chaining and arrow function
fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(userObj => {
            // do something with each username
            console.log(userObj.login);
        })
    })
    .catch(error => console.error(error));

// We can now create an abstraction around our AJAX request that talks to the GitHub API.
function getGithubUsernames() {
    return fetch('https://api.github.com/users')
        // resolves with the response body parsed as JSON
        .then(response => response.json())
}

// later on...

getGithubUsernames().then(users => {
    users.forEach(userObj => {
        // do something with each username
        console.log(userObj.login);
    });
}).catch(error => console.error(error));

// We can create a promise object like so:
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});
// When creating a promise, we pass 2 functions, resolve and reject, that, when invoked, will change the promise's state from pending to either resolved or rejected. Until either one of these functions is called, the promise will be in a pending state.
//
// The power of promises comes in the ability to return a value from an asynchronous operation:
// Using a setTimeout as it easily represents an asynchronous operation, but you could imagine instead we are in the callback function for an AJAX request.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 1500);
});

console.log(myPromise); // a pending promise
// By using .then and .catch, we can specify a function to run when the promise is resolved or rejected.
myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));

// The .resolve and .reject functions can also be passed a value, which will in turn to be passed to the callback function attached to the promise via .then and .catch.
//
// Let's write a promise that simulates an API request:
function makeRequest() {
    return new Promise((resolve, reject) => {
        // ** Sets a timer which executes the function once the timer expires. **
        setTimeout(() => {
            // *** Notice here that both the resolve and reject functions are being passed a value, and the callback functions supplied to .then and .catch will be passed the values ('message') that were passed to resolve and reject, respectively. ***
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"
//
// Here we have a function that returns a promise that will either resolve or reject after one and a half seconds. Most of the time it will resolve, but one out of ten times it will "fail."

// NOTE: ** setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires. **
// *** NOTE: IRL, the promise would probably be resolved with a complex JSON object, or array of objects, and rejected with an error object. ***


// ADDITIONAL NOTES FROM https://web.dev/promises/
// JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. In browsers, JavaScript shares a thread with a load of other stuff that differs from browser to browser. But typically JavaScript is in the same queue as painting, updating styles, and handling user actions (such as highlighting text and interacting with form controls). Activity in one of these things delays the others.
// You've probably used events and callbacks to get around this. Unfortunately, it's possible that the events happened before we started listening for them.
// Events are great for things that can happen multiple times on the same object—keyup, touchstart etc. With those events you don't really care about what happened before you attached the listener.

// At their most basic, promises are a bit like event listeners except:
//
//     A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
//     If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.
//
// This is extremely useful for async success/failure, because you're less interested in the exact time something became available, and more interested in reacting to the outcome.
