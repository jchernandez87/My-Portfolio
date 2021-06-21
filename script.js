const menu = document.querySelector('#menu-dropdown');
const btn = document.querySelector('.btn');
const btnClose = document.querySelector('.close-btn');
const link = document.querySelector('.btn-link');
const link2 = document.querySelector('.btn-link2');
const link3 = document.querySelector('.btn-link3');

function openMenu() {
  menu.style.visibility = 'visible';
  console.log(links)
};

function closeMenu() {
  menu.style.visibility = 'hidden';
};

btn.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
link.addEventListener('click', closeMenu);
link2.addEventListener('click', closeMenu);
link3.addEventListener('click', closeMenu);

