"use strict";

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.

// The Events API is a read-only API to the GitHub events.
// To get the list of random users, you have to make a request to the /user endpoint, and to get the details of a specific user, you make a request to the /user/{username} endpoint.


// PSEUDO:
// Let the user enter a Github username
// Store the username in a variable
// Fetch the JSON from events api: api.github.com/users/USER/events
// The first event in the array is the most recent push, return the date

// Stores input github name from html form
let githubName = document.getElementById("user").value;

// SHOULD HAVE USED ASYNC & AWAIT
function userLastCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers:
            {
                'Authorization': `${GITHUB_TOKEN}`,
                // This was recommended in the documentation: Custom media types are used in the API to let consumers choose the format of the data they wish to receive. This is done by adding one or more of the following types to the Accept header when you make a request.
                'Accept': 'application/vnd.github.v3+json'
            }
    })
        //Converting the response to a JSON object
        .then(response => response.json())
        .then(data => {
            // TEST LOGS
            console.log(data)
            console.log(`Last Commit: ${data[0].created_at}`);
            // Once the promise is complete, adds the last commit date to paragraph
            document.getElementById("commit").innerHTML = (data[0].created_at);

        })
        .catch(error => console.error(error));
}

// When submit is clicked, executes function (which adds last commit date to <p>)
async function commitDate() {
    document.getElementById('commit-heading').innerHTML = `The last commit for ${githubName} was at:`
    document.getElementById("commit").innerHTML = userLastCommit(githubName);
}

// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(num) {
    // Promise can only resolve after num seconds
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(`You waited ${num} seconds to see this. Congrats.`)
        }, num)
    })
}

// When the promise resolves, execute a function that logs the resolution value
wait(1000).then((message) => console.log(message));