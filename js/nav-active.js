$(document).ready(function(){
    $('#my-nav a').click(function(){
    $('#my-nav a.my-active').removeClass('my-active');
    $(this).addClass('my-active');
    });
    });