import '../scss/app.scss';
import '../pug/index.pug'

import SmoothScroll from './smooth_scroll'
import Welcome from './welcome'
import Navigation from './menu'

import IndexPage from './pages/index/index'

document.addEventListener("DOMContentLoaded", function() {
  initCommon();
  initIndexPage();
});

function controller() {
  
}

function initCommon() {
  Welcome();
  SmoothScroll();
}

function initIndexPage() {
  Navigation();
  IndexPage();
}
