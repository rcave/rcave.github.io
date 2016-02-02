$(document).ready(function () {

    $('.mobileNav').click(function () {
        $('nav ul').slideToggle('');
    });

    $("a.sponImg").click(function () {
        var clicked = $(this).attr("href");
        $("#closeButton").show(1100);
        $(".bsModal").slideDown(600);
        $("#closeButton").click(function () {
            $(".bsModal").slideUp(500);
            $(".sponImg").removeClass("active");
            $("#closeButton").hide(200);
            $(".sponsorContainer").css("padding-bottom", "50px");
        });
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
        } else {
            $(".sponsorContainer").css("padding-bottom", "150px");
            $(".sponDescription").hide();
            $("a.sponImg").removeClass("active");
            $(this).addClass('active');
            $(clicked).slideDown(400);
        }

    });

});