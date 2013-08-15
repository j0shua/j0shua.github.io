$(document).ready(function() {
    $(window).bind('scroll', function(){
        var threshold = 150;
        var fadingIn = false;
        
        if ($(window).scrollTop() > threshold && !fadingIn){
            // fade it in
            fadingIn = true;
            $('.wrap').stop().fadeTo(200, 1);
        } else {
            $('.wrap').stop().fadeTo(200, 0);                
        }
    });
        
    $('.top').click(function(){
        window.scrollTo(0);
    });
});
