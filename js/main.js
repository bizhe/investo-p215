$(document).ready(function () {
    

    $(window).scroll(function () { 
        if($("html").scrollTop() >= 45){
            $("#navigation .navbar").addClass("scrolled");
        }else{
            $("#navigation .navbar").removeClass("scrolled");
        }
    });

   

});