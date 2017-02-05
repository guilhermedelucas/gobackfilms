(function(){

    $('#slides').superslides({
        animation: 'slide',
        slide_speed: 'normal',
        slide_easing: 'linear',
        delay: 10000,
        nav_class: 'slides-navigation',
        container_class: 'slides-container',
        play: 5000,
        pagination: true,
        hashchange: true
    });


    if ($(window).width() < 540) {
        $(".clearfixlist").css('display','none');
    }

    if ($(window).width() > 700) {
    window.sr = ScrollReveal();
    sr.reveal('.clearfix', {duration: 2000, origin: 'left', distance: '3000px', opacity: 1
});
sr.reveal('#slides', {duration: 2000, origin: 'right', distance: '3000px', opacity: 1
});
sr.reveal('.header', {duration: 1000, origin: 'left', distance: '500px',
});
sr.reveal('.box-grid', {duration: 1000, origin: 'right', distance: '1000px'
});
    //     $('.clearfix').on('mouseenter', function(){
    //         event.preventDefault();
    //         $('.navLinks').fadeOut(200, function(){
    //             $('.navLinks').css('color', 'rgb(53,52,54)');
    //             $('.bullet').css('color', 'rgb(53, 52, 54)');
    //             $('.navLinks').fadeIn(200);
    //         })
    //         $('.logo-image').fadeOut(200, function() {
    //             $('.logo-image').attr('src', "./imgs/gobacklogo.png");
    //             $('.logo-image').fadeIn(200);
    //         });
    //     }).on('mouseleave', function(){
    //         $('.navLinks').css('color', '#fff');
    //         $('.bullet').css('color', '#fff');
    //         $('.logo-image').attr('src', "./imgs/gobacklogoinverted.png");
    //     })
    }

    var pull = $('.menu-icon');
    var menu = $('.clearfixlist');
    var menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(function () {
            if ($(this).is(':visible')) {
                $(this).css('display','inline-flex')};
            });
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    })


})();
