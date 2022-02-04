"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let smartPeople = users.filter(lang => lang.languages.length >= 3);
console.log(`All of the smart people: ${smartPeople}`)

// TODO: Use .map to create an array of strings where each element is a user's email address
let allEmails = users.map(userEmail => userEmail.email);
console.log(`List of all user emails: ${allEmails}`)

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Need to set the initial value (0) of the accumulator (total) otherwise NaN
const avgUserExp = users.reduce((total, user,) => {
    return (total + user.yearsOfExperience) / users.length;
}, 0)
console.log(`Average experience: ${avgUserExp}`)

// TODO: Use .reduce to get the longest email from the list of users.
function longestEmail() {
    return users.reduce((longest, current) => {
        if (longest.email.length > current.email.length) {
            return longest.email
        }
        return current
    })
}

console.log(`Longest Email: ${longestEmail()}`)

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
function instructors() {
    return users.reduce((previous, current, index, array) => {
        // If we are not at the end of the array, add a comma after the name
        if (array.indexOf(current) < array.length - 1) {
            previous += `${current.name}, `;
            // If we are at the end of the array, add a period after the name.
        } else {
            previous += `${current.name}.`;
        }
        // Return the string of names, appended to the initial value
        return previous;
        // Initial value is a string
    }, 'Your instructors are: ');
}

console.log(instructors())

// TODO: Use .reduce to get the unique list of languages from the list of users.
function uniqueLanguages() {
    // Loops through every current element(which is an object) of users, executing the callback function on each element
    return users.reduce((previous, current) => {
        let currentLang = current.languages;
        // Loop through the array of languages
        for (let i = 0; i < currentLang.length; i++) {
            if (!previous.includes(currentLang[i])) {
                // After the function is finished on the current element, push the result to the accumulator array (previous)
                previous.push(currentLang[i]);
            } // continue is implied
        }
        return previous;
        // Need to specify the original value (for previous) to be an array
    }, [])
}

console.log(`Unique languages: ${uniqueLanguages()}`)
