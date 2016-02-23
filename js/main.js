$('document').ready(function () {
    setTimeout(function () {

        $('#rcLogoDiv').hide(800);
        $('#nameSwitch').css('display', 'block');

    }, 3000);

    if ($(window).width() > 575) {
        $('.anchor').removeClass('anchor');
        $('.hexTop').addClass('topAni');
        $('.hexMid').addClass('midAni');
        $('.hexBot').addClass('botAni');

        //FACEBOOK HOVER
        $('#contactFacebook').mouseenter(function () {
            $('.facebookLogo').removeClass('socialInactive');
        });
        $('#contactFacebook').mouseleave(function () {
            $('.facebookLogo').addClass('socialInactive');
        });

        //INSTAGRAM HOVER 
        $('#contactInstagram').mouseenter(function () {
            $('.InstagramLogo').removeClass('socialInactive');
        });
        $('#contactInstagram').mouseleave(function () {
            $('.InstagramLogo').addClass('socialInactive');
        });

        //LINKEDIN HOVER
        $('#contactLinkedIn').mouseenter(function () {
            $('.LinkedInLogo').removeClass('socialInactive');
        });
        $('#contactLinkedIn').mouseleave(function () {
            $('.LinkedInLogo').addClass('socialInactive');
        });

        //GITHUBHOVER
        $('#contactGithub').mouseenter(function () {
            $('.GitHubLogo').removeClass('socialInactive');
        });
        $('#contactGithub').mouseleave(function () {
            $('.GitHubLogo').addClass('socialInactive');
        });

        //CODEPEN HOVER
        $('#contactCodePen').mouseenter(function () {
            $('.CodePenLogo').removeClass('socialInactive');
        });
        $('#contactCodePen').mouseleave(function () {
            $('.CodePenLogo').addClass('socialInactive');
        });

        //SPOTIFY HOVER
        $('#contactSpotify').mouseenter(function () {
            $('.SpotifyLogo').removeClass('socialInactive');
        });
        $('#contactSpotify').mouseleave(function () {
            $('.SpotifyLogo').addClass('socialInactive');
        });

    }

    if ($(window).width() < 575) {
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

            if ($(window).width() < 575) {
                setTimeout(function () {
                    $('.menCon').css('background', '#000');
                }, 1000);
            }
        } else {
            $('#hamMenuLinks').show();
            $('#navTakeOver').slideDown(1000);
            $('#hamMen').addClass('takeOver');
            $('#hamMen div').css('background', '#000');
            $('.menCon').css('background', 'none');
        }
    });

    //Return to top menu changes
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('#returnTop img').attr('src', 'images/322-circle-up.png');
            $('#returnTop a').attr('href', '#home');
        } else {
            $('#returnTop img').attr('src', 'images/324-circle-down.png');
            $('#returnTop a').attr('href', '#bio');

        }
    });

    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if (hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1000, 'swing');
            hashTagActive = this.hash;
        }
    });


    //Clicking Menu items
    $('.hexLinks li a').click(function () {
        $('#navTakeOver').slideUp(1000);
        setTimeout(function () {
            $('#hamMenuLinks').hide();
        }, 1000);
        $('#hamMen').removeClass('takeOver');
        $('#hamMen div').css('background', '#fff');

        if ($(window).width() < 575) {
            setTimeout(function () {
                $('.menCon').css('background', '#000');
            }, 1000);
        }
    });


});
