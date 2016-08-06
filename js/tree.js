$(document).ready(function () {

    $('.children').addClass('slideInUp');
    $('.node').click(function () {
        $(this).next().toggleClass('display');
        $(this).next().toggleClass('animated slideInDown');
        $(this).next().toggleClass('slideInUp');
        
    });
});
