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
var mixer = mixitup(containerEl);

