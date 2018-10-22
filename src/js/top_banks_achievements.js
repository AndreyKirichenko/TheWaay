const TIMEOUT = 5000;

let list = document.querySelector('.topBanksAchievements');
let items = document.querySelectorAll('.topBanksAchievements__item');
let length = items.length;
let current = 0;

function topBanksAchievements() {
  fadeIn(items[current]);

  setInterval(function(){
    let next = getNextIndex();
    fadeOut(items[current]);
    fadeIn(items[next]);
    current = next;
  }, TIMEOUT);
}

function fadeIn(element) {
  element.classList.add('topBanksAchievements__item--visible');
}

function fadeOut(element) {
  element.classList.remove('topBanksAchievements__item--visible');
}

function getNextIndex() {
  let next = current + 1;
  if(next < length) {
    return next;
  }

  return 0
}

export default topBanksAchievements;
