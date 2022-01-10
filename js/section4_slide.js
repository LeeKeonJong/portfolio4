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
	  } else {
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
		
	  }
	

	

	
});