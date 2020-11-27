// For Slider
var myCarousel = document.querySelector('#our-slider')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true,
    slide: true,
    //   ride: true
});

// Mixitup - For Filtering
var containerEl = document.querySelector('.gallery');
/* var mixer = mixitup(containerEl);
var containerEl = document.querySelector('.gallery'); */
var mixer = mixitup(containerEl, { //For Conflict from Tab Pane
    selectors: {
        control: '[mix-control]', //For Conflict from Tab Pane
    }
});

// For Owl Carousel Slider
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 200,
        smartSpeed: 300,
        loop: true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }

    });
});
