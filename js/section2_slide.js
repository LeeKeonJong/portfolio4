$(function(){
    
    function slide() {
        $('#section2_slide li:first').addClass('scail');
            $('#section2_slide').stop().animate({marginLeft: -410},function () {
            $('#section2_slide li:first').appendTo('#section2_slide');
            $('#section2_slide').css({ marginLeft: 0 });
            $('#section2_slide li').removeClass('scail');
              

            if ($('#section2_slide li:first').hasClass('img1') === true) {
                $('.dot1').addClass('active');
                $('.dot5').removeClass('active');
            }

            if ($('#section2_slide li:first').hasClass('img2') === true) {
                $('.dot2').addClass('active');
                $('.dot1').removeClass('active');
            }

            if ($('#section2_slide li:first').hasClass('img3') === true) {
                $('.dot3').addClass('active');
                $('.dot2').removeClass('active');

            }

            if ($('#section2_slide li:first').hasClass('img4') === true) {
                $('.dot4').addClass('active');
                $('.dot3').removeClass('active');
            }

            if ($('#section2_slide li:first').hasClass('img5') === true) {
                $('.dot5').addClass('active'); 
                $('.dot4').removeClass('active');
            }

            
        });

    }
    setInterval(slide,3000);

});