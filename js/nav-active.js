$(document).ready(function(){
    $('#my-nav a').click(function(){
    $('#my-nav a.my-active').removeClass('my-active');
    $(this).addClass('my-active');
    });

    //page 1
    $('#pg1').mouseenter(function(){
        $('#my-nav a.my-active').removeClass('my-active');
        $('#nav-page1').addClass('my-active');
    });
    $('#pg1').mouseleave(function(){
        $('#nav-page1').removeClass('my-active');
    });

    //page 2
    $('#pg2').mouseenter(function(){
        $('#my-nav a.my-active').removeClass('my-active');
        $('#nav-page2').addClass('my-active');
    });
    $('#pg1').mouseleave(function(){
        $('#nav-page2').removeClass('my-active');
    });

    //page 3
    $('#pg3').mouseenter(function(){
        $('#my-nav a.my-active').removeClass('my-active');
        $('#nav-page3').addClass('my-active');
    });
    $('#pg3').mouseleave(function(){
        $('#nav-page3').removeClass('my-active');
    });

    //page 4
    $('#pg4').mouseenter(function(){
        $('#my-nav a.my-active').removeClass('my-active');
        $('#nav-page4').addClass('my-active');
    });
    $('#pg4').mouseleave(function(){
        $('#nav-page4').removeClass('my-active');
    });

    //page 5
    $('#pg5').mouseenter(function(){
        $('#my-nav a.my-active').removeClass('my-active');
        $('#nav-page5').addClass('my-active');
    });
    $('#pg5').mouseleave(function(){
        $('#nav-page5').removeClass('my-active');
    });
});