"use strict";
// Objects

// Create an empty object
let person = {};
// When a property is assigned dynamically (e.g. in a variable) it can only be accessed via []
// [] is the only way to access a property key that is a non-standard string (spaces, starts with #, etc.)
const newPropertyName = 'firstName';
person[newPropertyName] = 'Matt';
person.birthday = 'Sep 22';
console.log(person);

console.log(`-----------------------------------------------------------`);

let birthdayObject = {
    month: 'November',
    day: 22
}

// 'this' keyword refers to the object containing it
// If you use the birthdayObject (hardcoding) (instead of using 'this'), anytime you alter the name, you would
// have to go everywhere and change the name. Whereas 'this' is always relative to the object,
// which also affects dynamic objects (prototypes/constructors)
let person2 = {
    name: 'Jack',
    birthday: birthdayObject,
    isTall: false,
    // Can't just refer to this.month, since month is inside of birthday
    getDetails: function () {
        return `${this.birthday.month}, ${this.birthday.day}`
    }
}

console.log(person2.getDetails());