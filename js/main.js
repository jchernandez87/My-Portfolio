/* eslint-disable linebreak-style */
import { cardGenerator, projectsArr } from './projects.js';

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

cardGenerator(projectsArr);

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
const form = document.querySelector('.contactForm');
const nameInput = form.elements.user_name;
const email = form.elements.user_email;
const textInput = form.elements.user_message;
const emailError = document.querySelector('.error');
const contactBtn = document.querySelector('.contactBtn');

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

function saveLocal() {
  const userName = document.querySelector('#name').value;
  const emailAddress = document.querySelector('#mail').value;
  const text = document.querySelector('#msg').value;

  const data = {
    name: userName,
    userEmail: emailAddress,
    userText: text,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

function getData() {
  const dataGet = localStorage.getItem('data');
  if (dataGet) {
    const dataParse = JSON.parse(dataGet);
    nameInput.value = dataParse.name;
    email.value = dataParse.userEmail;
    textInput.value = dataParse.userText;
  }
}

getData();

form.addEventListener('input', () => {
  saveLocal();
});

email.addEventListener('input', () => {
  if (!email.validity.patternMismatch) {
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
