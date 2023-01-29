//  lightbox
$('.demo').lightcase();

$("body").niceScroll({
          cursorcolor:'#25aae1',
          cursorwidth:"6px",
          scrollspeed: 200,
        });

$(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 82) {
                //clearHeader, not clearheader - caps H
                $("header").addClass("scrollHeader");
            }else{
                $("header").removeClass("scrollHeader");
            }
        });

$(document).ready(function () {
    var owl = $('.tools');
    owl.owlCarousel({
        items: 4,
        loop: true,
        dots:false,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:4},
            480 : {items:2},
            360 : {items:2},
            320 : {items:2}
        }

    });

});
//Alternate Direction
// $(document).ready(function () {
//     var owl = $('.owl-carousel2');
//     owl.owlCarousel({
//         items: 4,
//         rtl: true,
//         loop: true,
//         margin: 20,
//         autoplay: true,
//         slideTransition: 'linear',
//         autoplayTimeout: 0,
//         autoplaySpeed: 3000,
//         autoplayHoverPause: false
//     });

// });

$(document).ready(function(){
		// $(function(){
	  $("#demo").owlCarousel({
	  	nav: true,
        dots: true,
        center: false,
        loop: true,
        margin: 15,
        autoplay: 900000,
        autoPlaySpeed: 90000,
		autoPlayTimeout: 900000,
        autoplayHoverPause: false,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:2},
            480 : {items:2},
            360 : {items:1},
            320 : {items:1}
        }
        
	  });
      $("#industry-carasoul").owlCarousel({
        nav: true,
        dots: false,
        center: false,
        loop: true,
        margin: 15,
        autoplay: 900,
        autoPlaySpeed: 900,
        autoPlayTimeout: 900,
        autoplayHoverPause: false,

        // autoWidth:true
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:2},
            767 : {items:2},
            576 : {items:2},
            480 : {items:1},
            360 : {items:1},
            320 : {items:1}
        }
      });


});

// blog
$(document).ready(function(){
  $("#related-post").owlCarousel({
    nav: true,
    dots: true,
    center: false,
    loop: true,
    margin: 31,
    autoplay: 900000,
    autoPlaySpeed: 90000,
    autoPlayTimeout: 900000,
    autoplayHoverPause: false,
    responsive : {
        // breakpoint from 0 up
        1280 : {items:3},
        0 : {items:3},                
        991 : {items:2},
        480 : {items:2},
        360 : {items:1},
        320 : {items:1}
    }
  });
});

// industry-details
$(document).ready(function(){
      $("#industry-details").owlCarousel({
        nav: true,
        dots: true,
        center: false,
        loop: true,
        margin: 30,
        autoplay: 900000,
        autoPlaySpeed: 90000,
        autoPlayTimeout: 900000,
        autoplayHoverPause: false,
        items:1
      });
});


$(document).ready(function () {
    var owl = $('.workProgress');
    owl.owlCarousel({
        nav:true,
        dots:true,
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        // slideTransition: 'linear',
        autoplayTimeout: 3000,
        // autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:3},
            0 : {items:3},                
            991 : {items:2},
            768 : {items:2},
            575 : {items:1},
            480 : {items:1},
            360 : {items:1},
            320 : {items:1}
        }

    });

});

$(document).ready(function () {
    var owl = $('.desktopDemo');
    owl.owlCarousel({
        items: 3,
        loop: true,
        dots:true,
        margin: 0,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 30000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:3},
            0 : {items:3},                
            991 : {items:3},
            480 : {items:2},
            360 : {items:2},
            320 : {items:2}
        }

    });

});
$(document).ready(function(){
      $("#tabDemo").owlCarousel({
        nav: true,
        dots: true,
        center: false,
        loop: true,
        margin: 40,
        autoplay: true,
        autoPlaySpeed: 300,
        autoPlayTimeout: 900000,
        autoplayHoverPause: false,
        items:2,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:2},
            0 : {items:2},                
            991 : {items:2},
            767 : {items:2},
            575 : {items:2},
            481 : {items:2},
            480 : {items:1},
            360 : {items:1},
            320 : {items:1}
        }
      });
});
$(document).ready(function(){
      $("#mobileDemo").owlCarousel({
        nav: true,
        dots: true,
        center: false,
        loop: true,
        margin: 40,
        autoplay: true,
        autoPlaySpeed: 400,
        autoPlayTimeout: 90000,
        autoplayHoverPause: false,
        items:2,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:2},
            0 : {items:2},                
            991 : {items:2},
            767 : {items:2},
            575 : {items:2},
            481 : {items:2},
            360 : {items:1},
            320 : {items:1}
        }
      });
});

//  about us
$(document).ready(function(){
    $(".platform ul li a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        console.log(target);
        $(".platform ul li a").removeClass("activated");
        $(this).addClass("activated");
        $(".platform-text").hide();
        $(target).fadeIn();
    })
});

$(document).ready(function () {
    var owl = $('.teams').addClass('owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            1280 : {items:4},
            0 : {items:4},                
            991 : {items:4},
            767 : {items:3},
            575 : {items:2},
            480 : {items:2},
            360 : {items:2},
            320 : {items:2}
        }

    });
        $('.teams').on('mouseenter',function(e){
            $(this).closest('.owl-carousel').trigger('play.owl.autoplay');
        })
        $('.teams').on('mouseleave',function(e){
            $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
        })
});


//   portfolio
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});







// $(document).ready(function(){
//     $(".essential-btn").click(function(){
//         $(".packages-holder").addClass("slow");
//         // $(".pricing-part").css('height', 'auto').slideDown('slow');
//         $(".essential-btn").toggleClass("btns")
//     })
// })


// clock

//*******************************************
//***CODE BELOW===> This is a custom owl carousel js, you can add it by pasting the code below into a js file and use it in your website.

/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
