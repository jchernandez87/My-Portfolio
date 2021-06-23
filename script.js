/* eslint-disable linebreak-style */
const main = document.querySelector('.main-container');
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
  main.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  main.classList.remove('active');
}

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

const form = document.querySelector('.contactForm');
const email = form.elements.user_email;
const emailError = document.querySelector('.error');
const contactBtn = document.querySelector('.contactBtn');

email.addEventListener('input', () => {
  if (!email.validity.patternMismatch) {
    emailError.textContent = '';
    emailError.classList.remove('active');
  }
});

contactBtn.addEventListener('click', (event) => {
  if (email.validity.patternMismatch) {
    emailError.classList.add('active');
    emailError.textContent = 'Email Address should use lowercase only.';
    event.preventDefault();
  } else {
    emailError.textContent = '';
  }
});