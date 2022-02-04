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
console.log(smartPeople)

// TODO: Use .map to create an array of strings where each element is a user's email address
let allEmails = users.map(userEmail => userEmail.email);
console.log(allEmails)

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Need to set the initial value (0) of the accumulator (total) otherwise NaN
const avgUserExp = users.reduce((total, user,) => {
    return (total + user.yearsOfExperience) / users.length;
}, 0)
console.log(avgUserExp)

// TODO: Use .reduce to get the longest email from the list of users.



// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// TODO: Use .reduce to get the unique list of languages from the list of users.

