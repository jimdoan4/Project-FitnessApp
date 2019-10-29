$(document).ready(function(){
  
  $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 4500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1
          }
      }]
  });
});

