$(function(){

    $(document).ready(function(){
        fullset();
        quickbtnClick();
    });

    function fullset(){
        var pageindex = $("#wrap > .fullsection").size();
        for (var i=1; i<=pageindex; i++){
            $("#wrap > .quickbtn > ul").append("<li></li>");
        }
        $("#wrap .quickbtn ul :first-child").addClass("on");
        $(window).bind("mousewheel", function(event){
            var page = $(".quickbtn ul li.on");
            if($("body").find("#wrap:animated").length >= 1) return false;
            if(event.originalEvent.wheelDelta >= 0) {
                var before=page.index();
                if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");
                var pagelength=0;
                for(var i=1; i<(before); i++)
                {
                    pagelength += $(".section"+i).height();
                }
                if(page.index() > 0){
                    page=page.index()-1;
                    $("#wrap").animate({"top": -pagelength + "px"},600, "swing");
                }
            }else{
                var nextPage=parseInt(page.index()+1);
                var lastPageNum=parseInt($(".quickbtn ul li").size());
                if(page.index() <= $(".quickbtn ul li").size()-1){
                    page.next().addClass("on").siblings(".on").removeClass("on");
                }
                if(nextPage < lastPageNum){
                    var pagelength=0;
                    for(var i=1; i<(nextPage+1); i++){
                        pagelength += $(".section"+i).height();
                    }
                    $("#wrap").animate({"top":-pagelength + "px"},600, "swing");
                }
                else{
                    $('.section5').css("transform","translateY(-220px)").css("transition","0.6s");
                    $('.footer').css("transform","translateY(220px)").css("display","block");
                    
                };
                 
            }
            $(".footer").click(function(){
                $(".footer").hide();
            });
        });

        $(window).resize(function(){
            var resizeindex = $(".quickbtn ul lu .on").index()+1;

            var pagelength=0;
            for(var i=1; i<resizeindex; i++){
                pagelength += $(".sction"+i).height();
            }
            $("#wrap").animate({"top":-pagelength + "px"},0);
        });
    }
    function quickbtnClick(){
        $(".quickbtn li").click(function(){
            var gnbindex = $(this).index()+1;
            var length=0;
            for(var i=1; i<(gnbindex); i++)
            {
                length+=$(".section" +i).height();
            }
            if($("body").find("#wrap:animated").length >= 1) return false;
            $(this).addClass("on").siblings("li").removeClass("on");

            $("#wrap").animate({"top": -length + "px"},800, "swing");
            return false;
        });
    }











});