"use strict";
(function () {
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
    $.ajax('../data/inventory.json').done(function (data, status){
        console.log("Request status: " + status);
        console.log("Data returned from server:");
        console.log(data);
        // NOTE THE REASON WHY WE DON'T HAVE TO PARSE THE JSON IS THE $.ajax() REQUEST USES AN INTELLIGENT GUESS IF THE DATATYPE ISN'T SPECIFIED
        // data is an array containing each tool object
        data.forEach(tool => {
            // Creates a new row for each tool
            const toolRow = document.createElement('tr');
            // Create entry for each column in the table
            const titleTD = document.createElement('td')
            const quantityTD = document.createElement('td');
            const priceTD = document.createElement('td');
            const categoriesTD = document.createElement('td');
            // Adds table data to row
            $(toolRow).append(titleTD,quantityTD,priceTD,categoriesTD);
            // Adds table row to table
            $('#insertProducts').append(toolRow);
            // Insert data into created columns
            titleTD.innerHTML = tool.title;
            quantityTD.innerHTML = tool.quantity;
            priceTD.innerHTML = `$ ${tool.price}`;
            categoriesTD.innerHTML = tool.categories;
        });
    });
})();

// create tr for each item
// create td for each column
// append each item to the table