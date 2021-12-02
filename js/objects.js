(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName: 'Matt',
        lastName: 'Lewis'
    }
    console.log(`${person.firstName} ${person.lastName}`);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}!`;
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // Callback function argument can be named anything - don't use a property name
    shoppers.forEach(function (person) {
        console.log(`${person.name}'s Total: $${person.amount}`);
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        // MY NOTE: An object property name can be any valid JavaScript string, or anything that can be converted to a string,
        // including the empty string. However, any property name that is not a valid JavaScript identifier (for example,
        // a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation.
    let books = [
            {
                title: 'How to Not Suck at JavaScript',
                author: {
                    firstName: 'Casey',
                    lastName: 'Edwards'
                }
            },
            {
                title: 'Nested Objects',
                author: {
                    firstName: 'Larry',
                    lastName: 'Bird'
                }
            },
            {
                title: 'San Antonio Traffic',
                author: {
                    firstName: 'Fender',
                    lastName: 'Bender'
                }
            },
            {
                title: 'How Hot is Texas?',
                author: {
                    firstName: 'Scorching',
                    lastName: 'Hot'
                }
            },
            {
                title: 'Xmas Decor',
                author: {
                    firstName: 'Santa',
                    lastName: 'Klaus'
                }
            }
        ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book){
        // Refactored using showBookInfo()
        showBookInfo(book);
        // console.log(`Book #${books.indexOf(book)}`);
        // console.log(`Title: ${book.title}`);
        // console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        // console.log('---');
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */
    function createBook(bookTitle, bookAuthor) {
        // Split author into a firstName and LastName
        let nameArray = bookAuthor.split(' ');
        // Store first and last name in separate variables
        let authorFirstName = nameArray[0];
        let authorLastName = nameArray[1];
        // Create a newBook object containing the passed in values
        let newBook = {
            title: bookTitle,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
        // Add newBook to our books array
        books.push(newBook);
    }
    // Create a book
    createBook('My Autobiography', 'Matt Lewis');
    // Check that the newBook is in the array
    console.log(books);

    //  *   Create a function named `showBookInfo` that accepts a book object and
    //  *   outputs the information described above. Refactor your loop to use your
    //  *   `showBookInfo` function.

    // This is called above (hoisted) in line 135
    function showBookInfo (bookObj) {
        console.log(`Book #${books.indexOf(bookObj)}`);
        console.log(`Title: ${bookObj.title}`);
        console.log(`Author: ${bookObj.author.firstName} ${bookObj.author.lastName}`);
        console.log('---');
    }

})();
