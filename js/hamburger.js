$(function(){

   if (window.matchMedia("(min-width: 1000px)").matches) {
$("#ham").hover(function(){
   $("#menu_ham").css("right","0").css("transition","0.6s");
    
});

$("#menu_ham").mouseleave(function(){
    $("#menu_ham").css("right","-30%").css("transition","0.5s");
     
 });


   }else if(window.matchMedia("(min-width: 600px)").matches){

      $("#ham").hover(function(){
         $("#menu_ham").css("right","0").css("transition","0.6s");
          
      });
      
      $("#menu_ham").mouseleave(function(){
          $("#menu_ham").css("right","-50%").css("transition","0.5s");
           
       });
   }else if(window.matchMedia("(max-width: 599px)").matches){

      $("#ham").click(function(){
         $("#menu_ham").css("right","0").css("transition","0.6s");
         $("#ham").fadeOut(100);
         $("#close").stop().fadeIn(500);
      });
      
      $("#close").click(function(){
          $("#menu_ham").css("right","-50%").css("transition","0.5s");
          $("#close").fadeOut(100);
          $("#ham").stop().fadeIn(500);
       });
   }


});