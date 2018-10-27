import Swiper from 'swiper';

function _slider() {
  let mySwiper = initSlider();

  window.addEventListener('resize', function(){
    mySwiper.destroy();
    mySwiper = undefined;
    mySwiper = initSlider();
  });
}

function initSlider() {
  return new Swiper('.swiper-container', {
    autoplay: {
      delay: 7000,
    },
    autoResize: false,
    loop: true,
    resizeReInit: true,
    navigation: {
      nextEl: '.weHelpSlider__button--next',
      prevEl: '.weHelpSlider__button--prev',
    },
  });
}

export default _slider;
