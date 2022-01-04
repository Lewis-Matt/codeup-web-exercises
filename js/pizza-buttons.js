/*The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

Basic syntax is: $(selector).action()

    A $ sign to define/access jQuery
    A (selector) to "query (or find)" HTML elements
    A jQuery action() to be performed on the element(s)
*/

$('.btnNext').click(function () {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function () {
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});