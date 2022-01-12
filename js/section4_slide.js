$(function(){
	if (window.matchMedia("(min-width: 1400px)").matches) {
		$('.dot6').click(function(){
		$('#section4_hiddenbox').stop().animate({marginLeft:0},1500);
		$('.dot7').removeClass('active')
		$('.dot6').addClass('active')
	});	

	$('.dot7').click(function(){
		$('#section4_hiddenbox').stop().animate({marginLeft:-1400},1500);
		$('.dot7').addClass('active')
		$('.dot6').removeClass('active')
	});
	  } else if(window.matchMedia("(min-width: 1000px)").matches){
		$('.dot6').click(function(){
			$('#section4_hiddenbox').stop().animate({marginLeft:0},6000);
			$('.dot7').removeClass('active')
			$('.dot6').addClass('active')
		});	
	
		$('.dot7').click(function(){
			$('#section4_hiddenbox').stop().animate({marginLeft:-1965},10000);
			$('.dot7').addClass('active')
			$('.dot6').removeClass('active')
			
		});
		
	  }else if(window.matchMedia("(min-width: 600px)").matches){
		$('.dot6').click(function(){
			$('#section4_hiddenbox').stop().animate({marginLeft:0},7000);
			$('.dot7').removeClass('active')
			$('.dot6').addClass('active')
		});	
	
		$('.dot7').click(function(){
			$('#section4_hiddenbox').stop().animate({marginLeft:-2260},10000);
			$('.dot7').addClass('active')
			$('.dot6').removeClass('active')
			
		});
		
	  }
	

	

	
});