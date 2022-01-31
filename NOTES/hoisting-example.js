'use strict';

sayHello1(); // Greetings from sayHello1.
sayHello2(); // Uncaught TypeError: Property 'sayHello2' of object [object Object] is not a function

// declare a function in the global scope
function sayHello1 () {
    alert('Greetings from sayHello1.');
}

// assign a function to a variable named sayHello2
var sayHello2 = function () {
    alert('Greetings from sayHello2.');
};
// As you can see, even though the sayHello1 function is called before the declaration, the declaration is hoisted to the
// top and is therefore accessible. However, in the case of sayHello2, where a function is assigned to a variable, the
// function will not be available until after the declaration.
// Due to the way hoisting works, it is best practice putting variable declarations at the beginning of a function and
// not spread them throughout, so it is easier to see how things are working.