var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var navTop = document.querySelector('.page-header__panel');

navMain.classList.add('main-nav--closed');
navTop.classList.add('page-header__panel--menu-closed');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navTop.classList.toggle('page-header__panel--menu-closed');
});
