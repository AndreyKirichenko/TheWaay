import '../scss/app.scss';
import '../pug/index.pug'

import '@babel/polyfill';
import router from 'page';

import SmoothScroll from './smooth_scroll';
import Welcome from './welcome';
import Navigation from './menu';

import IndexPage from './pages/index/index';

import SignInPage from './pages/sign_in/sign_in';

let documentReady = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', function(event) {
    resolve();
  });
});

documentReady.then(controller);

function controller() {
  // router('/', initIndexPage);
  // router('/sign_in.html', initSignInPage);
  // router();

  if (/sign_in.html/.test(window.location.href)) {
    initSignInPage()
  } else {
    initIndexPage();
  }
}

function initCommon() {
  Welcome();
  SmoothScroll();
  new Navigation();
}

function initIndexPage() {
  console.log(1);
  initCommon();
  IndexPage();
}

function initSignInPage() {
  console.log(2);
  initCommon();
  SignInPage();
}
