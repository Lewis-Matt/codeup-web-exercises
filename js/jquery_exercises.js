"use strict";
$(document).ready(function() {
    // Add an alert that says the pages has finished loading
    alert("The DOM has finished loading.")
    // ID SELECTORS
    // Use jQuery to select an element by the id. Alert the contents of the element.
    let descriptionContents = $('#description').html();
    alert(descriptionContents)
    // CLASS SELECTORS
    // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    $('.codeup').css('border', 'solid 1px red');
    //ELEMENT SELECTORS
    // Using jQuery, set the font-size of all li elements to 20px.
    $('li').css('font-size', '20px');
    // Craft selectors that highlight all the h1, p, and li elements.
    // MULTIPLE SELECTORS
    // Combine your selectors that highlight all the h1, p, and li elements.
    $('h1, p, li').css('background-color', '#fffd7a');

});