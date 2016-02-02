function checkWidth(init) {
    /*If browser resized, check width again */
    if ($(window).width() > 725) {
        $('nav').show();
        $('nav').removeClass('active');
        $('nav ul li').removeClass('dropDown');
    } else {
        if (!init) {
            $('nav').hide();
            $('nav').removeClass('active');
            $('nav ul li').addClass('dropDown');
        }
    }
}

$(document).ready(function () {

    $('.mobileNav').click(function () {
        console.log("it was clicked");

        //Nav has to have class open
        //Nav ul li has to have class dropDown

        if ($('nav').hasClass('active')) {
            $('nav').hide();
            $('nav').removeClass('active');
            $('nav ul li').removeClass('dropDown');
        } else {
            $('nav').addClass('active');
            $('nav').show();
            $('nav ul li').addClass('dropDown');
        }
    });
    checkWidth(true);

    $(window).resize(function () {
        checkWidth(false);
    });

    
    $('.mobileNav').hover(function (){
       $('.mobileNav div').css('background', '#595959'); 
    }, function(){$('.mobileNav div').css('background', '#fff');});
});