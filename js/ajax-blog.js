"use strict";
$(document).ready(function () {
// TODO: Use Ajax to load the contents of blog.json and add the data from it to your #posts div.
    $.ajax('../data/blog.json').done(function (data, status) {
        console.log("Request status: " + status);
        console.log("Data returned from server:");
        console.log(data);
        data.forEach(post => {
            // THIS IS USING DOM
            /////// jQuery would look like = $('<h1></h1>').html(post.title); (or .text())
            // Create div container for each post
            const blogPost = document.createElement('div');
            // Create h2 for each title
            const title = document.createElement('h1');
            // Create paragraph for the content
            const body = document.createElement('p');
            // Create paragraph containing categories/tags
            const tags = document.createElement('p');
            // Create element containing the date posted
            const datePosted = document.createElement('p');
            // Add the above format to parent div
            $(blogPost).append(title, body, tags, datePosted);
            // Add entire blog post to the html
            $('#posts').append(blogPost);
            // Insert the json data into the created fields
            title.innerHTML = post.title;
            body.innerHTML = post.content;
            tags.innerHTML = `Tagged: ${post.categories}`;
            datePosted.innerHTML = `Posted on - ${post.date}`;
            // Add bootstrap classes for styling
            $(title).addClass('p-3 bg-warning');
            $(tags).addClass('tag-bg');
            $(datePosted).addClass('text-center');
        })
    });
});