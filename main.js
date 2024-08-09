$(document).ready(function() {
    $('.hamburger-wrapper').click(function() {
        $('.mobile-menu').toggleClass('active');
        $('.hamburger-menu').toggleClass('active');
    });

    $('.close-button').click(function() {
        $('.mobile-menu').removeClass('active');
        $('.hamburger-menu').removeClass('active');
    });
});