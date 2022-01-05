/*The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: $(selector).action()

    A $ sign to define/access jQuery
    A (selector) to "query (or find)" HTML elements
    A jQuery action() to be performed on the element(s)
*/

// I had a lot of time troubleshooting, the error was that the 'active' class was associated with the anchor tag. By moving the 'active' (for the first element - Pizza Crust) to the li (that contains the anchor tag), everything worked. But I also had to put 'active' on the second tab as well for the nxt and prv button to work on the 2nd tab. I don't think there should be more than 1 active tab???

// $('.btnNext').click(function () {
//     $('.nav-tabs > .active').next('li').find('a').trigger('click');
// });
//
// $('.btnPrevious').click(function () {
//     $('.nav-tabs > .active').prev('li').find('a').trigger('click');
// });


// I am leaving the above, which is for Bootstrap 5 and the reason it wasn't working. Codeup is using Bootstrap 4:
$('.btnNext').click(function () {
    $('.nav-tabs > .nav-item > .active').parent().next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function () {
    $('.nav-tabs > .nav-item > .active').parent().prev('li').find('a').trigger('click');
});
