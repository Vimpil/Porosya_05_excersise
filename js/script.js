$(document).ready(function() {
    $(".retro_catal").fancybox({
        arrows: true,
    });

    // Timer script
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        // document.getElementById("seconds").innerHTML = seconds;


        // If the count down is finished, write some text 
        // if (distance < 0) {
        //   clearInterval(x);
        //   document.getElementById("timer").innerHTML = "EXPIRED";
        // }
    }, 1000);

   
    // Catal_retro_rad
    var images = $(".handler > div").hide(),
        x = 1;
    var showMore = $('#showMore');
    var showLess = $('#showLess');
    var funcs = {
        'showMore': function() {
            ++x;
            show();
        },
        'showLess': function() {
            --x;
            show();
        }
    }
    $('.controls').on('click', 'a', function(e) {
        return (funcs[e.target.id] || function() {})(), false;
    });

    function show() {
        images.hide().filter(function(i) {
            return i < (x * 6);
        }).show();
        showMore.show().filter(function() {
            return !images.is(':hidden');
        }).hide();
        showLess.show().filter(function() {
            return x === 1;
        }).hide();
    }
    show();
    // END Catal_retro_rad


 // Catal_retro_rad
    var images2 = $(".handler2 > div").hide(),
        y = 1;
    var showMore2 = $('#showMore2');
    var showLess2 = $('#showLess2');
    var funcs2 = {
        'showMore2': function() {
            ++y;
            show2();
        },
        'showLess2': function() {
            --y;
            show2();
        }
    }
    $('.controls2').on('click', 'a', function(e) {
        return (funcs2[e.target.id] || function() {})(), false;
    });

    function show2() {
        images2.hide().filter(function(i) {
            return i < (y * 6);
        }).show();
        showMore2.show().filter(function() {
            return !images2.is(':hidden');
        }).hide();
        showLess2.show().filter(function() {
            return y === 1;
        }).hide();
    }
    show2();
    // END Catal_retro_rad

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 100;
    var navbarHeight = $('.top_header').outerHeight();
    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            console.log("height");
            $('.top_header.nav-up').removeClass('nav-up').addClass('nav-down');
        } else {
            console.log("no height");
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.top_header.nav-down').removeClass('nav-down').addClass('nav-up');
            }
        }

        lastScrollTop = st;
    }
    $('#top_menu').slicknav({
        label: '',
    });
    $(".slicknav_btn").click(function() {
        console.log("addClass");
        $("div.slicknav_menu").toggleClass("menu_backgr_col");
        $("span.slicknav_icon.slicknav_no-text").toggleClass("toggled_menu_icon");
    });
});
// slicknav menu