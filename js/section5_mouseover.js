$(function(){
    $("#section5_textbox2").mouseover(function(){
        $("#radius_box").stop().fadeOut(100);
        $("#arrow").stop().show(100);
        
    });
    $("#section5_textbox2").mouseleave(function(){
        $("#arrow").stop().hide();
        $("#radius_box").stop().fadeIn();
    });

});