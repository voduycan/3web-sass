$(document).ready(function(){
    //meet the team
    $('#meettheteam').click(function(){
        $('#md-team').addClass('modal-block');
        $('#my-overlay').addClass('modal-block');
    });
    
    $('#my-overlay').click(function(){
        $('#md-team').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    $('#close-team').click(function(){
        $('#md-team').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    //contact
    $('#talk').click(function(){
        $('#md-contact').addClass('modal-block');
        $('#my-overlay').addClass('modal-block');
    });

    $('#my-overlay').click(function(){
        $('#md-contact').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    $('#close-contact').click(function(){
        $('#md-contact').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    //service
    $('#service').click(function(){
        $('#md-service').addClass('modal-block');
        $('#my-overlay').addClass('modal-block');
    });

    $('#my-overlay').click(function(){
        $('#md-service').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    $('#close-service').click(function(){
        $('#md-service').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    //advantage
    $('#advantage').click(function(){
        $('#md-advantage').addClass('modal-block');
        $('#my-overlay').addClass('modal-block');
    });
    
    $('#my-overlay').click(function(){
        $('#md-advantage').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    $('#close-advantage').click(function(){
        $('#md-advantage').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    //done 
    $('#done').click(function(){
        $('#md-done').addClass('modal-block');
        $('#my-overlay').addClass('modal-block');
    });
    
    $('#my-overlay').click(function(){
        $('#md-done').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });

    $('#close-done').click(function(){
        $('#md-done').removeClass('modal-block');
        $('#my-overlay').removeClass('modal-block');
    });
});