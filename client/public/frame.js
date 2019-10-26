$(document).ready(function(){
  
  $('.customer-logos').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});


// (function($) {

//     /**
//      * Copyright 2012, Digital Fusion
//      * Licensed under the MIT license.
//      * http://teamdf.com/jquery-plugins/license/
//      *
//      * @author Sam Sehnert
//      * @desc A small plugin that checks whether elements are within
//      *     the user visible viewport of a web browser.
//      *     only accounts for vertical position, not horizontal.
//      */
  
//     $.fn.visible = function(partial) {
      
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             _top          = $t.offset().top,
//             _bottom       = _top + $t.height(),
//             compareTop    = partial === true ? _bottom : _top,
//             compareBottom = partial === true ? _top : _bottom;
      
//       return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
//     };
      
//   })(jQuery);
  
//   var win = $(window);
  
//   var allMods = $(".module");
  
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("already-visible"); 
//     } 
//   });
  
//   win.scroll(function(event) {
    
//     allMods.each(function(i, el) {
//       var el = $(el);
//       if (el.visible(true)) {
//         el.addClass("come-in"); 
//       } 
//     });
    
//   });

