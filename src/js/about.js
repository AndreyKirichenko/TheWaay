import DEVICE_BREAKPOINTS from './device_breakpoints';
import videoCode from './video_code';

const ORIGIN_SIZES = {
  HEIGHT: 653,
  WIDTH: 439
};

const ORIGIN_RATIO = ORIGIN_SIZES.WIDTH / ORIGIN_SIZES.HEIGHT;

let outer = document.querySelector('.about__telephoneOuter');
let telephone = outer.querySelector('.about__telephone');
let inner = outer.querySelector('.about__telephoneInnerContainer');

function about() {
  videoContainer();
}

function videoContainer() {
  telephone.addEventListener('click', clickPlayHandler);

  window.addEventListener('resize', function(){
    setSizes();
  });
  setSizes();
}

function clickPlayHandler(event) {
  // event.preventDefault();
  // playVideo(event.currentTarget.getAttribute('href'));
  // telephone.removeEventListener('click', clickPlayHandler);
}

function setSizes() {
  if (window.innerWidth < DEVICE_BREAKPOINTS.TABLET) {
    telephone.setAttribute('style', '');
    return
  }
  let outerSizes = getActualOuterSizes();
  let telephoneSizes = getTelephoneSizes(outerSizes);
  telephone.setAttribute('style', `height:${telephoneSizes.height}px; width:  ${telephoneSizes.width}px`)
}

function getActualOuterSizes() {
  let height = outer.offsetHeight;
  let width = outer.offsetWidth;
  let ration = width / height;
  return {
    height, width, ration
  }
}

function getTelephoneSizes(outerSizes) {
  let width, height;
  if(ORIGIN_RATIO <= outerSizes.ration) {
    height = outerSizes.height;
    width = height * ORIGIN_RATIO;
  } else {
    width = outerSizes.width;
    height = width / ORIGIN_RATIO;
  }
  return { height, width }
}

function playVideo(url) {
  inner.innerHTML = videoCode(url, inner.offsetWidth, inner.offsetHeight);

}

export default about;
