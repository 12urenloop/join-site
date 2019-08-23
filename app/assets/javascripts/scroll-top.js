$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $(".scrollToTop").fadeIn(1000)
        } else {
            $(".scrollToTop").fadeOut(1000);
        }
    });

    //Click event to scroll to top
    $(".scrollToTop").click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });
});
