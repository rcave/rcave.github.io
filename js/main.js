//function checkWidth(init) {
//    /*If browser resized, check width again */
//    if ($(window).width() > 500) {
//        $('nav').show();
//        $('nav').removeClass('active');
//        $('nav ul li').removeClass('dropDown');
//    } else {
//        if (!init) {
//            $('nav').hide();
//            $('nav').removeClass('active');
//            $('nav ul li').addClass('dropDown');
//        }
//    }
//}

//    checkWidth(true);
//
//    $(window).resize(function () {
//        checkWidth(false);
//    });


//wait for animation to allow hover


setTimeout(function () {

    $('#rcLogoDiv').hide(800);
    $('#nameSwitch').css('display', 'block');

}, 3000);

$('document').ready(function () {
    if ($(window).width() < 500) {
        $('.hexTop').removeClass('topAni');
        $('.hexMid').removeClass('midAni');
        $('.hexBot').removeClass('botAni');
    }
    $('#hamMen').click(function () {

        if ($('#hamMen').hasClass('takeOver')) {
            $('#navTakeOver').slideUp(1000);
            setTimeout(function () {
                $('#hamMenuLinks').hide();
            }, 1000);
            $('#hamMen').removeClass('takeOver');
            $('#hamMen div').css('background', '#fff');
        } else {
            $('#hamMenuLinks').show();
            $('#navTakeOver').slideDown(1000);
            $('#hamMen').addClass('takeOver');
            $('#hamMen div').css('background', '#000');
        }
    });
});
