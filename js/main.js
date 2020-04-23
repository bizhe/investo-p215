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


   // client says slider

   if($(".items .item").length){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass:true,
        nav: false, 
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
            }
        }
    })
   }

   

});