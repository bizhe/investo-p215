$(document).ready(function () {
    

    $(window).scroll(function () { 
        if($("html").scrollTop() >= 45){
            $("#navigation .navbar").addClass("scrolled");
        }else{
            $("#navigation .navbar").removeClass("scrolled");
        }
    });



   $(".dropdown").hover(function(){
        $(this).css("transition", "all 0.3s");
        $(this).find(".dropdown-menu").addClass("show");
   }, function(){
       $(this).css("transition", "all 0.3s");
        $(this).find(".dropdown-menu").removeClass("show");
   })

});