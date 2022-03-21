

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".menu__class").slicknav({
        appendTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });









    /*--------------------------
        Room Pic Slider
    ----------------------------*/
    $(".room__pic__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Room Details Pic Slider
    ----------------------------*/
    $(".room__details__pic__slider").owlCarousel({
        loop: true,
        margin: 10,
        items: 2,
        dots: false,
        nav: true,
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
        autoHeight: false,
        autoplay: false,
        mouseDrag: false,
        responsive: {
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    
    
    
    
    /*--------------------------
        Logo Slider
    ----------------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 5,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 3
            },
            320: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    /*--------------------------
        Select
    ----------------------------*/
    //$("select").niceSelect();
    $('select').niceSelect();

    /*--------------------------
        Datepicker
    ----------------------------*/
    var today = new Date(); 
    var dd = today.getDate(); 
    var mm = today.getMonth() + 1; 

    var yyyy = today.getFullYear(); 
    if (dd < 10) { 
        dd = '0' + dd; 
    }
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var month;

    for (let i = 0; i <= 12; i++) {
        const element = mS[i];
        if (mm == mS.indexOf(mS[i])) {
            month = mS[i-1];
        }
    }
    var today = dd + ' ' + month + ' ' + yyyy; 

    $(".check__in").val(today);
    $(".check__out").val(today);

    $( ".datepicker_pop" ).datepicker({ 
        dateFormat: 'dd M yy',
        minDate: 0
    });

})(jQuery);

