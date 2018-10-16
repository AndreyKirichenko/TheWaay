import Swiper from 'swiper';


function slider() {
  let swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },
  });
}

export default slider;
