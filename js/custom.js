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
  $("#caseStudy_testimonail").owlCarousel({
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
        1280 : {items:2},
        0 : {items:2},                
        991 : {items:2},
        480 : {items:1},
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
// $(document).ready(function(){
//     $(".platform ul li a").click(function(e){
//         e.preventDefault();
//         var target = $(this).attr("href");
//         console.log(target);
//         $(".platform ul li a").removeClass("activated");
//         $(this).addClass("activated");
//         $(".platform-text").hide();
//         $(target).fadeIn();
//     })
// });
    // Finds all iframes from youtubes and gives them a unique class
    // jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");

    jQuery(".fancybox-close").click(function() {
      // changes the iframe src to prevent playback or stop the video playback in our case
      $('.youtube-iframe').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        console.log("close");
        return false;
      });
      
//click function
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

//  lightbox
// $('.demo').lightcase();
// $('.showcase').lightcase();
//   portfolio
// external js: isotope.pkgd.js





// portfolio

$(document).ready(function () {
var essapi_1;
jQuery(document).ready(function() {
    essapi_1 = jQuery("#esg-grid-1-1").tpessential({
        gridID:1,
        layout:"masonry",
        forceFullWidth:"off",
        lazyLoad:"off",
        gridID:"1",
        loadMoreType:"scroll",
        loadMoreAmount:5,
        loadMoreTxt:"Load More",
        loadMoreNr:"off",
        loadMoreEndTxt:"No More Items for the Selected Filter",
        loadMoreItems:[
                [56057, [-1, 64, 92, 145, 146]],
                [56027, [-1, 92, 145, 100, 146]],
                [55965, [-1, 63, 92, 145, 146]],
                [55926, [-1, 64, 92, 145, 146]],
                [55902, [-1, 64, 92, 145, 146]],
                [55869, [-1, 63, 92, 145, 146]],
                [55845, [-1, 92, 145, 146, 68]],
                [55834, [-1, 92, 145, 67]],
                [55810, [-1, 92, 145, 67, 146]],
                [55764, [-1, 63, 92, 145, 146]],
                [55752, [-1, 64, 92, 145, 146]],
                [55726, [-1, 92, 145, 146, 68]],
                [55704, [-1, 64, 92, 145, 146]],
                [55670, [-1, 63, 92, 145, 146]],
                [55550, [-1, 205, 92, 145, 146]],
                [55523, [-1, 64, 92, 145, 146]],
                [55466, [-1, 92, 145, 95, 146, 68]],
                [55422, [-1, 64, 92, 145, 146]],
                [55388, [-1, 63, 92, 145, 146]],
                [55382, [-1, 64, 92, 145, 146]],
                [55286, [-1, 63, 92, 145, 146]],
                [55244, [-1, 64, 92, 145, 146]],
                [55170, [-1, 63, 92, 145, 146]],
                [55144, [-1, 205, 92, 145, 146]],
                [55136, [-1, 205, 92, 145, 146]],
                [54856, [-1, 64, 92, 145, 146]],
                [54847, [-1, 64, 92, 145, 146]],
                [54811, [-1, 92, 145, 146, 68]],
                [54786, [-1, 92, 145, 146, 68]],
                [54570, [-1, 63, 92, 145, 146]],
                [54487, [-1, 64, 92, 145, 146]],
                [54472, [-1, 64, 92, 145, 146]],
                [54365, [-1, 64, 92, 145, 146]],
                [54314, [-1, 64, 92, 145, 146]],
                [54285, [-1, 63, 92, 145, 146]],
                [54244, [-1, 63, 92, 145, 146]],
                [54217, [-1, 92, 145, 67, 146]],
                [54181, [-1, 92, 145, 146, 68]],
                [54136, [-1, 63, 92, 145, 146]],
                [54109, [-1, 64, 92, 145, 146]],
                [54062, [-1, 63, 92, 145, 146]],
                [54017, [-1, 64, 92, 145, 146]],
                [53965, [-1, 92, 145, 146]],
                [53861, [-1, 92, 145, 146, 68]],
                [53801, [-1, 64, 92, 145, 146]],
                [53750, [-1, 64, 92, 145, 100, 146]],
                [53696, [-1, 92, 145, 67, 146]],
                [53071, [-1, 14, 63, 92, 145, 146]],
                [52189, [-1, 92, 145, 146, 68]],
                [51718, [-1, 92, 145, 146, 68]],
                [51417, [-1, 92, 145, 146, 68]],
                [51412, [-1, 92, 145, 146, 68]],
                [50514, [-1, 92, 145, 146, 68]],
                [50440, [-1, 92, 145, 146, 68]],
                [50455, [-1, 64, 92, 145, 146]],
                [50266, [-1, 92, 145, 146, 68]],
                [50103, [-1, 92, 145, 146, 68]],
                [50083, [-1, 92, 145, 146, 68]],
                [49544, [-1, 92, 145, 146, 68]],
                [49437, [-1, 92, 145, 146, 68]],
                [49253, [-1, 92, 145, 146, 68]],
                [49234, [-1, 64, 92, 145, 146]],
                [49223, [-1, 63, 92, 145, 146]],
                [49095, [-1, 92, 145, 67, 146]],
                [49055, [-1, 64, 92, 145, 146]],
                [48669, [-1, 92, 145, 146, 68]],
                [47643, [-1, 208, 147, 92, 145]],
                [46492, [-1, 92, 145, 67, 146]],
                [38612, [-1, 183, 181, 63, 92, 145, 144]],
                [40978, [-1, 185, 181, 92, 145, 68, 144]],
                [40933, [-1, 64, 92, 145, 100, 146]],
                [40938, [-1, 92, 145, 66, 144]]],
        row:9999,
        apiName: "essapi_1",
        loadMoreAjaxToken:"dce4874ed4",
        // loadMoreAjaxUrl:"http://rumbleseatmusic.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
        ajaxContentTarget:"ess-grid-ajax-container-",
        ajaxScrollToOffset:"0",
        ajaxCloseButton:"off",
        ajaxContentSliding:"on",
        ajaxScrollToOnLoad:"on",
        ajaxCallbackArgument:"off",
        ajaxNavButton:"off",
        ajaxCloseType:"type1",
        ajaxCloseInner:"false",
        ajaxCloseStyle:"light",
        ajaxClosePosition:"tr",
        space:20,
        pageAnimation:"fade",
        startAnimation: "none",
        startAnimationSpeed: 1000,
        startAnimationDelay: 100,
        startAnimationType: "item",
        animationType: "item",
        paginationScrollToTop:"off",
        paginationAutoplay:"off",
        spinner:"spinner0",
        lightBoxMode:"contentgroup",
        lightboxHash:"group",
        lightboxPostMinWid:"75%",
        lightboxPostMaxWid:"75%",
        lightboxSpinner:"off",
        lightBoxFeaturedImg:"off",
        lightBoxPostTitle:"off",
        lightBoxPostTitleTag:"h2",
        lightboxMargin : "0|0|0|0",
        lbContentPadding : "0|0|0|0",
        lbContentOverflow : "auto",
        animSpeed:1000,
        delayBasic:1,
        mainhoverdelay:1,
        filterType:"single",
        showDropFilter:"hover",
        filterGroupClass:"esg-fgc-1",
        filterNoMatch:"No Items for the Selected Filter",
        filterDeepLink:"off",
        hideMarkups: "on",
        inViewport: true,
        viewportBuffer: 20,
        youtubeNoCookie:"false",
        convertFilterMobile:false,
        paginationSwipe: "off",
        paginationDragVer: "off",
        pageSwipeThrottle: 30,
        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
        hideBlankItemsAt: "1",
        responsiveEntries: [
                        { width:1400,amount:1,mmheight:0},
                        { width:1170,amount:1,mmheight:0},
                        { width:1024,amount:1,mmheight:0},
                        { width:960,amount:1,mmheight:0},
                        { width:778,amount:1,mmheight:0},
                        { width:640,amount:1,mmheight:0},
                        { width:480,amount:1,mmheight:0}
                        ]
    });

    var arrows = false,
        lightboxOptions = {
        margin : [0,0,0,0],
        buttons : ["share","thumbs","close"],
        infobar : true,
        loop : true,
        slideShow : {"autoStart": false, "speed": 3000},
        animationEffect : "fade",
        animationDuration : 500,
        beforeShow: function(a, c) {
          if(!arrows) {
              jQuery("body").addClass("esgbox-hidearrows");
          }
            var i = 0,
                multiple = false;
            a = a.slides;
            for(var b in a) {
                i++;
                if(i > 1) {
                    multiple = true;
                    break;
                }
            }
            if(!multiple) jQuery("body").addClass("esgbox-single");
            if(c.type === "image") jQuery(".esgbox-button--zoom").show();
        },
        beforeLoad: function(a, b) {
            jQuery("body").removeClass("esg-four-by-three");
            if(b.opts.$orig.data("ratio") === "4:3") jQuery("body").addClass("esg-four-by-three");
        },
        afterLoad: function() {jQuery(window).trigger("resize.esglb");},
        afterClose : function() {jQuery("body").removeClass("esgbox-hidearrows esgbox-single");},
        transitionEffect : "fade",
        transitionDuration : 366,
        hash : "group",
        arrows : false,
        wheel : false,
    };

    jQuery("#esg-grid-1-1").data("lightboxsettings", lightboxOptions);


    try{
        jQuery("#esg-grid-1-1 .esgbox").esgbox(lightboxOptions);
    } catch (e) {}

});
});

var essapi_2;
jQuery(document).ready(function() {
    essapi_2 = jQuery("#esg-grid-2-2").tpessential({
        gridID:2,
        layout:"masonry",
        forceFullWidth:"off",
        lazyLoad:"off",
        gridID:"2",
        loadMoreType:"scroll",
        loadMoreAmount:5,
        loadMoreTxt:"Load More",
        loadMoreNr:"off",
        loadMoreEndTxt:"No More Items for the Selected Filter",
        loadMoreItems:[
                [56057, [-1, 64, 92, 145, 146]],
                [56027, [-1, 92, 145, 100, 146]],
                [55965, [-1, 63, 92, 145, 146]],
                [55926, [-1, 64, 92, 145, 146]],
                [55902, [-1, 64, 92, 145, 146]],
                [55869, [-1, 63, 92, 145, 146]],
                [55845, [-1, 92, 145, 146, 68]],
                [55834, [-1, 92, 145, 67]],
                [55810, [-1, 92, 145, 67, 146]],
                [55764, [-1, 63, 92, 145, 146]],
                [55752, [-1, 64, 92, 145, 146]],
                [55726, [-1, 92, 145, 146, 68]],
                [55704, [-1, 64, 92, 145, 146]],
                [55670, [-1, 63, 92, 145, 146]],
                [55550, [-1, 205, 92, 145, 146]],
                [55523, [-1, 64, 92, 145, 146]],
                [55466, [-1, 92, 145, 95, 146, 68]],
                [55422, [-1, 64, 92, 145, 146]],
                [55388, [-1, 63, 92, 145, 146]],
                [55382, [-1, 64, 92, 145, 146]],
                [55286, [-1, 63, 92, 145, 146]],
                [55244, [-1, 64, 92, 145, 146]],
                [55170, [-1, 63, 92, 145, 146]],
                [55144, [-1, 205, 92, 145, 146]],
                [55136, [-1, 205, 92, 145, 146]],
                [54856, [-1, 64, 92, 145, 146]],
                [54847, [-1, 64, 92, 145, 146]],
                [54811, [-1, 92, 145, 146, 68]],
                [54786, [-1, 92, 145, 146, 68]],
                [54570, [-1, 63, 92, 145, 146]],
                [54487, [-1, 64, 92, 145, 146]],
                [54472, [-1, 64, 92, 145, 146]],
                [54365, [-1, 64, 92, 145, 146]],
                [54314, [-1, 64, 92, 145, 146]],
                [54285, [-1, 63, 92, 145, 146]],
                [54244, [-1, 63, 92, 145, 146]],
                [54217, [-1, 92, 145, 67, 146]],
                [54181, [-1, 92, 145, 146, 68]],
                [54136, [-1, 63, 92, 145, 146]],
                [54109, [-1, 64, 92, 145, 146]],
                [54062, [-1, 63, 92, 145, 146]],
                [54017, [-1, 64, 92, 145, 146]],
                [53965, [-1, 92, 145, 146]],
                [53861, [-1, 92, 145, 146, 68]],
                [53801, [-1, 64, 92, 145, 146]],
                [53750, [-1, 64, 92, 145, 100, 146]],
                [53696, [-1, 92, 145, 67, 146]],
                [53071, [-1, 14, 63, 92, 145, 146]],
                [52189, [-1, 92, 145, 146, 68]],
                [51718, [-1, 92, 145, 146, 68]],
                [51417, [-1, 92, 145, 146, 68]],
                [51412, [-1, 92, 145, 146, 68]],
                [50514, [-1, 92, 145, 146, 68]],
                [50440, [-1, 92, 145, 146, 68]],
                [50455, [-1, 64, 92, 145, 146]],
                [50266, [-1, 92, 145, 146, 68]],
                [50103, [-1, 92, 145, 146, 68]],
                [50083, [-1, 92, 145, 146, 68]],
                [49544, [-1, 92, 145, 146, 68]],
                [49437, [-1, 92, 145, 146, 68]],
                [49253, [-1, 92, 145, 146, 68]],
                [49234, [-1, 64, 92, 145, 146]],
                [49223, [-1, 63, 92, 145, 146]],
                [49095, [-1, 92, 145, 67, 146]],
                [49055, [-1, 64, 92, 145, 146]],
                [48669, [-1, 92, 145, 146, 68]],
                [47643, [-1, 208, 147, 92, 145]],
                [46492, [-1, 92, 145, 67, 146]],
                [38612, [-1, 183, 181, 63, 92, 145, 144]],
                [40978, [-1, 185, 181, 92, 145, 68, 144]],
                [40933, [-1, 64, 92, 145, 100, 146]],
                [40938, [-1, 92, 145, 66, 144]]],
        row:9999,
        apiName: "essapi_2",
        loadMoreAjaxToken:"dce4874ed4",
        // loadMoreAjaxUrl:"http://rumbleseatmusic.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
        ajaxContentTarget:"ess-grid-ajax-container-",
        ajaxScrollToOffset:"0",
        ajaxCloseButton:"off",
        ajaxContentSliding:"on",
        ajaxScrollToOnLoad:"on",
        ajaxCallbackArgument:"off",
        ajaxNavButton:"off",
        ajaxCloseType:"type1",
        ajaxCloseInner:"false",
        ajaxCloseStyle:"light",
        ajaxClosePosition:"tr",
        space:20,
        pageAnimation:"fade",
        startAnimation: "none",
        startAnimationSpeed: 1000,
        startAnimationDelay: 100,
        startAnimationType: "item",
        animationType: "item",
        paginationScrollToTop:"off",
        paginationAutoplay:"off",
        spinner:"spinner0",
        lightBoxMode:"contentgroup",
        lightboxHash:"group",
        lightboxPostMinWid:"75%",
        lightboxPostMaxWid:"75%",
        lightboxSpinner:"off",
        lightBoxFeaturedImg:"off",
        lightBoxPostTitle:"off",
        lightBoxPostTitleTag:"h2",
        lightboxMargin : "0|0|0|0",
        lbContentPadding : "0|0|0|0",
        lbContentOverflow : "auto",
        animSpeed:1000,
        delayBasic:1,
        mainhoverdelay:1,
        filterType:"single",
        showDropFilter:"hover",
        filterGroupClass:"esg-fgc-2",
        filterNoMatch:"No Items for the Selected Filter",
        filterDeepLink:"off",
        hideMarkups: "on",
        inViewport: true,
        viewportBuffer: 20,
        youtubeNoCookie:"false",
        convertFilterMobile:false,
        paginationSwipe: "off",
        paginationDragVer: "off",
        pageSwipeThrottle: 30,
        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
        hideBlankItemsAt: "1",
        responsiveEntries: [
                        { width:1400,amount:1,mmheight:0},
                        { width:1170,amount:1,mmheight:0},
                        { width:1024,amount:1,mmheight:0},
                        { width:960,amount:1,mmheight:0},
                        { width:778,amount:1,mmheight:0},
                        { width:640,amount:1,mmheight:0},
                        { width:480,amount:1,mmheight:0}
                        ]
    });

    var arrows = false,
        lightboxOptions = {
        margin : [0,0,0,0],
        buttons : ["share","thumbs","close"],
        infobar : true,
        loop : true,
        slideShow : {"autoStart": false, "speed": 3000},
        animationEffect : "fade",
        animationDuration : 500,
        beforeShow: function(a, c) {
          if(!arrows) {
              jQuery("body").addClass("esgbox-hidearrows");
          }
            var i = 0,
                multiple = false;
            a = a.slides;
            for(var b in a) {
                i++;
                if(i > 1) {
                    multiple = true;
                    break;
                }
            }
            if(!multiple) jQuery("body").addClass("esgbox-single");
            if(c.type === "image") jQuery(".esgbox-button--zoom").show();
        },
        beforeLoad: function(a, b) {
            jQuery("body").removeClass("esg-four-by-three");
            if(b.opts.$orig.data("ratio") === "4:3") jQuery("body").addClass("esg-four-by-three");
        },
        afterLoad: function() {jQuery(window).trigger("resize.esglb");},
        afterClose : function() {jQuery("body").removeClass("esgbox-hidearrows esgbox-single");},
        transitionEffect : "fade",
        transitionDuration : 366,
        hash : "group",
        arrows : false,
        wheel : false,
    };

    jQuery("#esg-grid-2-2").data("lightboxsettings", lightboxOptions);

if('ontouchend' in document) jQuery('.esg-grid').addClass('touch');
});


var essapi_2;
jQuery(document).ready(function() {
    essapi_2 = jQuery("#esg-grid-2-3").tpessential({
        gridID:2,
        layout:"masonry",
        forceFullWidth:"off",
        lazyLoad:"off",
        gridID:"2",
        loadMoreType:"scroll",
        loadMoreAmount:5,
        loadMoreTxt:"Load More",
        loadMoreNr:"off",
        loadMoreEndTxt:"No More Items for the Selected Filter",
        loadMoreItems:[
                [56057, [-1, 64, 92, 145, 146]],
                [56027, [-1, 92, 145, 100, 146]],
                [55965, [-1, 63, 92, 145, 146]],
                [55926, [-1, 64, 92, 145, 146]],
                [55902, [-1, 64, 92, 145, 146]],
                [55869, [-1, 63, 92, 145, 146]],
                [55845, [-1, 92, 145, 146, 68]],
                [55834, [-1, 92, 145, 67]],
                [55810, [-1, 92, 145, 67, 146]],
                [55764, [-1, 63, 92, 145, 146]],
                [55752, [-1, 64, 92, 145, 146]],
                [55726, [-1, 92, 145, 146, 68]],
                [55704, [-1, 64, 92, 145, 146]],
                [55670, [-1, 63, 92, 145, 146]],
                [55550, [-1, 205, 92, 145, 146]],
                [55523, [-1, 64, 92, 145, 146]],
                [55466, [-1, 92, 145, 95, 146, 68]],
                [55422, [-1, 64, 92, 145, 146]],
                [55388, [-1, 63, 92, 145, 146]],
                [55382, [-1, 64, 92, 145, 146]],
                [55286, [-1, 63, 92, 145, 146]],
                [55244, [-1, 64, 92, 145, 146]],
                [55170, [-1, 63, 92, 145, 146]],
                [55144, [-1, 205, 92, 145, 146]],
                [55136, [-1, 205, 92, 145, 146]],
                [54856, [-1, 64, 92, 145, 146]],
                [54847, [-1, 64, 92, 145, 146]],
                [54811, [-1, 92, 145, 146, 68]],
                [54786, [-1, 92, 145, 146, 68]],
                [54570, [-1, 63, 92, 145, 146]],
                [54487, [-1, 64, 92, 145, 146]],
                [54472, [-1, 64, 92, 145, 146]],
                [54365, [-1, 64, 92, 145, 146]],
                [54314, [-1, 64, 92, 145, 146]],
                [54285, [-1, 63, 92, 145, 146]],
                [54244, [-1, 63, 92, 145, 146]],
                [54217, [-1, 92, 145, 67, 146]],
                [54181, [-1, 92, 145, 146, 68]],
                [54136, [-1, 63, 92, 145, 146]],
                [54109, [-1, 64, 92, 145, 146]],
                [54062, [-1, 63, 92, 145, 146]],
                [54017, [-1, 64, 92, 145, 146]],
                [53965, [-1, 92, 145, 146]],
                [53861, [-1, 92, 145, 146, 68]],
                [53801, [-1, 64, 92, 145, 146]],
                [53750, [-1, 64, 92, 145, 100, 146]],
                [53696, [-1, 92, 145, 67, 146]],
                [53071, [-1, 14, 63, 92, 145, 146]],
                [52189, [-1, 92, 145, 146, 68]],
                [51718, [-1, 92, 145, 146, 68]],
                [51417, [-1, 92, 145, 146, 68]],
                [51412, [-1, 92, 145, 146, 68]],
                [50514, [-1, 92, 145, 146, 68]],
                [50440, [-1, 92, 145, 146, 68]],
                [50455, [-1, 64, 92, 145, 146]],
                [50266, [-1, 92, 145, 146, 68]],
                [50103, [-1, 92, 145, 146, 68]],
                [50083, [-1, 92, 145, 146, 68]],
                [49544, [-1, 92, 145, 146, 68]],
                [49437, [-1, 92, 145, 146, 68]],
                [49253, [-1, 92, 145, 146, 68]],
                [49234, [-1, 64, 92, 145, 146]],
                [49223, [-1, 63, 92, 145, 146]],
                [49095, [-1, 92, 145, 67, 146]],
                [49055, [-1, 64, 92, 145, 146]],
                [48669, [-1, 92, 145, 146, 68]],
                [47643, [-1, 208, 147, 92, 145]],
                [46492, [-1, 92, 145, 67, 146]],
                [38612, [-1, 183, 181, 63, 92, 145, 144]],
                [40978, [-1, 185, 181, 92, 145, 68, 144]],
                [40933, [-1, 64, 92, 145, 100, 146]],
                [40938, [-1, 92, 145, 66, 144]]],
        row:9999,
        apiName: "essapi_2",
        loadMoreAjaxToken:"dce4874ed4",
        // loadMoreAjaxUrl:"http://rumbleseatmusic.com/wp-admin/admin-ajax.php",
        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
        ajaxContentTarget:"ess-grid-ajax-container-",
        ajaxScrollToOffset:"0",
        ajaxCloseButton:"off",
        ajaxContentSliding:"on",
        ajaxScrollToOnLoad:"on",
        ajaxCallbackArgument:"off",
        ajaxNavButton:"off",
        ajaxCloseType:"type1",
        ajaxCloseInner:"false",
        ajaxCloseStyle:"light",
        ajaxClosePosition:"tr",
        space:20,
        pageAnimation:"fade",
        startAnimation: "none",
        startAnimationSpeed: 1000,
        startAnimationDelay: 100,
        startAnimationType: "item",
        animationType: "item",
        paginationScrollToTop:"off",
        paginationAutoplay:"off",
        spinner:"spinner0",
        lightBoxMode:"contentgroup",
        lightboxHash:"group",
        lightboxPostMinWid:"75%",
        lightboxPostMaxWid:"75%",
        lightboxSpinner:"off",
        lightBoxFeaturedImg:"off",
        lightBoxPostTitle:"off",
        lightBoxPostTitleTag:"h2",
        lightboxMargin : "0|0|0|0",
        lbContentPadding : "0|0|0|0",
        lbContentOverflow : "auto",
        animSpeed:1000,
        delayBasic:1,
        mainhoverdelay:1,
        filterType:"single",
        showDropFilter:"hover",
        filterGroupClass:"esg-fgc-2",
        filterNoMatch:"No Items for the Selected Filter",
        filterDeepLink:"off",
        hideMarkups: "on",
        inViewport: true,
        viewportBuffer: 20,
        youtubeNoCookie:"false",
        convertFilterMobile:false,
        paginationSwipe: "off",
        paginationDragVer: "off",
        pageSwipeThrottle: 30,
        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
        hideBlankItemsAt: "1",
        responsiveEntries: [
                        { width:1400,amount:1,mmheight:0},
                        { width:1170,amount:1,mmheight:0},
                        { width:1024,amount:1,mmheight:0},
                        { width:960,amount:1,mmheight:0},
                        { width:778,amount:1,mmheight:0},
                        { width:640,amount:1,mmheight:0},
                        { width:480,amount:1,mmheight:0}
                        ]
    });

    var arrows = false,
        lightboxOptions = {
        margin : [0,0,0,0],
        buttons : ["share","thumbs","close"],
        infobar : true,
        loop : true,
        slideShow : {"autoStart": false, "speed": 3000},
        animationEffect : "fade",
        animationDuration : 500,
        beforeShow: function(a, c) {
          if(!arrows) {
              jQuery("body").addClass("esgbox-hidearrows");
          }
            var i = 0,
                multiple = false;
            a = a.slides;
            for(var b in a) {
                i++;
                if(i > 1) {
                    multiple = true;
                    break;
                }
            }
            if(!multiple) jQuery("body").addClass("esgbox-single");
            if(c.type === "image") jQuery(".esgbox-button--zoom").show();
        },
        beforeLoad: function(a, b) {
            jQuery("body").removeClass("esg-four-by-three");
            if(b.opts.$orig.data("ratio") === "4:3") jQuery("body").addClass("esg-four-by-three");
        },
        afterLoad: function() {jQuery(window).trigger("resize.esglb");},
        afterClose : function() {jQuery("body").removeClass("esgbox-hidearrows esgbox-single");},
        transitionEffect : "fade",
        transitionDuration : 366,
        hash : "group",
        arrows : false,
        wheel : false,
    };

    jQuery("#esg-grid-2-3").data("lightboxsettings", lightboxOptions);

if('ontouchend' in document) jQuery('.esg-grid').addClass('touch');
});
























































// init Isotope
// var $grid = $('.grid').isotope({
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows'
// });
// // filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function() {
//     var number = $(this).find('.number').text();
//     return parseInt( number, 10 ) > 50;
//   },
//   // show if name ends with -ium
//   ium: function() {
//     var name = $(this).find('.name').text();
//     return name.match( /ium$/ );
//   }
// };
// // bind filter button click
// $('.filters-button-group').on( 'click', 'button', function() {
//   var filterValue = $( this ).attr('data-filter');
//   // use filterFn if matches value
//   filterValue = filterFns[ filterValue ] || filterValue;
//   $grid.isotope({ filter: filterValue });
// });
// // change is-checked class on buttons
// $('.button-group').each( function( i, buttonGroup ) {
//   var $buttonGroup = $( buttonGroup );
//   $buttonGroup.on( 'click', 'button', function() {
//     $buttonGroup.find('.is-checked').removeClass('is-checked');
//     $( this ).addClass('is-checked');
//   });
// });







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
