(function($) {
    "use strict";
    $(window).load(function() {
        $("#load").fadeOut();
        $('#loading').delay(0).fadeOut('slow');
        $('.owl-carousel-1').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            smartSpeed: 800,
            dots: true,
            nav: false
        });
    });
    $('#navbar,#scroll-down').on("click", function(e) {
        if ($(e.target).is('a.page-scroll')) {
            if (location.pathname.replace(/^\//, '') == e.target.pathname.replace(/^\//, '') && location.hostname == e.target.hostname) {
                var target = $(e.target.hash);
                target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
                if (target.length) {
                    var gap = 75;
                    if ($('.navbar-default').hasClass('no-sticky')) {
                        gap = 0;
                    }
                    $('html,body').animate({
                        scrollTop: target.offset().top - gap
                    }, 900);
                }
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(".navbar-toggle").trigger("click");
                }
            }
            return false;
        }
    });
    $(window).scroll(function() {
        if (!$('.navbar-default').hasClass('no-sticky')) {
            if ($(this).scrollTop() > 10) {
                $('.navbar-default').addClass('sticky');
            } else {
                $('.navbar-default').removeClass('sticky');
            }
        }
    });
    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })
    // $("html").niceScroll({
    //     scrollspeed: 150,
    //     mousescrollstep: 38,
    //     cursorwidth: 7,
    //     cursorborder: 0,
    //     cursorcolor: '#2f3742',
    //     autohidemode: true,
    //     zindex: 999999999,
    //     horizrailenabled: false,
    //     cursorborderradius: 0
    // });
    /*
    $("#contactform").submit(function(e) {
        $("#ajaxloader").show();
        $("#contactform").hide();
        $.ajax({
            url: 'php/contact-form.php',
            data: $(this).serialize(),
            type: 'post',
            success: function(response) {
                $("#ajaxloader").hide();
                $("#contactform").show();
                $("#contactform").find("input, textarea").val("");
                $("#formmessage").html(response).show().delay(2000).fadeOut('slow');
            }
        });
        e.preventDefault();
    }); 
    */
    $('.language-skills').appear(function() {
        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            lineWidth: 8,
            size: 150,
            scaleColor: false,
            barColor: '#07cb79',
            trackColor: '#f7f7f7',
            animate: 7000,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        offset: 400
    }); 
    var win = $(window)
      , foo = $('#typer');
    foo.typer(['<h2>Java Developer</h2>', '<h2>Android Developer/ JavaScript Developer</h2>','<h2>AI Developer</h2>']);
    win.resize(function() {
        var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
        foo.css({
            fontSize: fontSize * .3 + 'px'
        });
    }).resize();
    $('.skill').appear(function() {
        $(".bar").each(function() {
            var $bar = $(this)
              , $pct = $bar.find(".pct")
              , data = $bar.data("bar");
            setTimeout(function() {
                $bar.css("background-color", data.color).prop("title", data.width).animate({
                    "width": $pct.html()
                }, 3000, function() {
                    $pct.css({
                        "color": data.color,
                        "opacity": 1
                    });
                });
            }, data.delay || 0);
        });
    }, {
        offset: 400
    });
    $(window).on("load resize", function(e) {
        var $container = $('.isotope')
          , colWidth = function() {
            var w = $container.width()
              , columnNum = 1
              , columnWidth = 0;
            return columnWidth;
        }
          , isotope = function() {
            $container.isotope({
                resizable: true,
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: colWidth(),
                    gutterWidth: 10
                }
            });
        };
        isotope();
        var $isotopefilters = $('.isotope-filters');
        $isotopefilters.on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
        $isotopefilters.each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });
    $('.popup-portfolio').magnificPopup({
        delegate: 'a.portfolio-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>All Rights Reserved</small>';
            }
        }
    });
    var menu = $(".contact-content")
      , toggle = $(".contact-toggle")
      , toggleIcon = $(".contact-toggle span");
    function toggleThatNav() {
        if (menu.hasClass("show-contact")) {
            if (!Modernizr.csstransforms) {
                menu.removeClass("show-contact");
                toggle.removeClass("show-contact");
                menu.animate({
                    right: "-=300"
                }, 500);
                toggle.animate({
                    right: "-=300"
                }, 500);
            } else {
                menu.removeClass("show-contact");
                toggle.removeClass("show-contact");
            }
        } else {
            if (!Modernizr.csstransforms) {
                menu.addClass("show-contact");
                toggle.addClass("show-contact");
                menu.css("right", "0px");
                toggle.css("right", "330px");
            } else {
                menu.addClass("show-contact");
                toggle.addClass("show-contact");
            }
        }
    }
    function changeToggleClass() {
        toggleIcon.toggleClass("ti-close");
        toggleIcon.toggleClass("ti-comments");
    }
    toggle.on("click", function(e) {
        toggleThatNav();
        changeToggleClass();
        return false;
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            if (menu.hasClass("show-contact")) {
                if (!Modernizr.csstransforms) {
                    menu.removeClass("show-contact");
                    toggle.removeClass("show-contact");
                    menu.css("right", "-300px");
                    toggle.css("right", "30px");
                    changeToggleClass();
                } else {
                    menu.removeClass("show-contact");
                    toggle.removeClass("show-contact");
                    changeToggleClass();
                }
            }
        }
    });
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
})(jQuery);
