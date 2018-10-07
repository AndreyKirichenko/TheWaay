$.fn.andSelf = function() {
  return this.addBack.apply(this, arguments);
}

$(document).ready(function() {

  $('.owl-carousel--centeredImages').owlCarousel({
    stagePadding: 0,
    items: 1,
    loop: true,
    center: true,
    singleItem:true,
    dots: true,
    dotsContainer: '.owl-carousel--centeredImages__dots',
    nav: false
  });

  // $('.owl-carousel--centeredImages').owlCarousel({
  //   stagePadding: 0,
  //   items: 1,
  //   loop: true,
  //   center: true,
  //   singleItem:true,
  //   dots: true,
  //   dotsContainer: '.owl-carousel--centeredImages__dots',
  //   nav: false
  // });
})
