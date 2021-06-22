/* eslint-disable linebreak-style */
const menu = document.querySelector('#menu-dropdown');
const modal = document.querySelector('#modal-small');
const overlay = document.querySelector('#overlay');
const btn = document.querySelector('.btn');
const btnClose = document.querySelector('.close-btn');
const link = document.querySelector('.btn-link');
const link2 = document.querySelector('.btn-link2');
const link3 = document.querySelector('.btn-link3');
const modalOpenBtn = document.querySelector('.projectBtn');
const modalCloseBtn = document.querySelector('#close-modal-btn');

function openMenu() {
  menu.style.visibility = 'visible';
}

function closeMenu() {
  menu.style.visibility = 'hidden';
}

btn.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
link.addEventListener('click', closeMenu);
link2.addEventListener('click', closeMenu);
link3.addEventListener('click', closeMenu);

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
