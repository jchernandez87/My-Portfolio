/* eslint-disable linebreak-style */
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

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
const containerDesk = document.querySelector('.containerDesk');

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

const projectsArr = [
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tag1: 'html',
    tag2: 'bootstrap',
    tag3: 'Ruby',
    btnText: 'See Project',
    imgUrl: '/assets/img/cardB.png',
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tag1: 'html',
    tag2: 'bootstrap',
    tag3: 'Ruby',
    btnText: 'See Project',
    imgUrl: '/assets/img/aCardBack.png',
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tag1: 'html',
    tag2: 'bootstrap',
    tag3: 'Ruby',
    btnText: 'See Project',
    imgUrl: '/assets/img/aCardBack.png',
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tag1: 'html',
    tag2: 'bootstrap',
    tag3: 'Ruby',
    btnText: 'See Project',
    imgUrl: '/assets/img/aCardBack.png',
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tag1: 'html',
    tag2: 'bootstrap',
    tag3: 'Ruby',
    btnText: 'See Project',
    imgUrl: '/assets/img/aCardBack.png',
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    tag1: 'html',
    tag2: 'bootstrap',
    tag3: 'Ruby',
    btnText: 'See Project',
    imgUrl: '/assets/img/aCardBack.png',
  },
];

function getProjectsData() {
  if (projectsArr.length > 0) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < projectsArr.length; i++) {
      const cardDiv = document.createElement('li');
      cardDiv.style.backgroundImage = `url(${projectsArr[i].imgUrl})`;
      cardDiv.classList.add('card-dynamic');
      containerDesk.appendChild(cardDiv);
      const cardInfo = document.createElement('ul');
      cardInfo.classList.add('info');
      cardDiv.appendChild(cardInfo);
      const titleContainer = document.createElement('li');
      cardInfo.appendChild(titleContainer);
      const title = document.createElement('h3');
      title.textContent = projectsArr[i].title;
      titleContainer.appendChild(title);
      const textContainer = document.createElement('li');
      cardInfo.appendChild(textContainer);
      const text = document.createElement('p');
      textContainer.appendChild(text);
      text.textContent = projectsArr[i].text;
      const tagList = document.createElement('ul');
      tagList.classList.add('cardTagGroup');
      cardDiv.appendChild(tagList);
      const tag1 = document.createElement('li');
      tag1.textContent = projectsArr[i].tag1;
      tagList.appendChild(tag1);
      const tag2 = document.createElement('li');
      tag2.textContent = projectsArr[i].tag2;
      tagList.appendChild(tag2);
      const tag3 = document.createElement('li');
      tag3.textContent = projectsArr[i].tag3;
      tagList.appendChild(tag3);
      const btnContainer = document.createElement('div');
      btnContainer.classList.add('bottomBtn');
      cardDiv.appendChild(btnContainer);
      const seeBtn = document.createElement('a');
      seeBtn.classList.add('aBtn');
      seeBtn.setAttribute('href', 'https://github.com/jchernandez87/My-Portfolio');
      seeBtn.setAttribute('target', '_blank');
      seeBtn.setAttribute('rel', 'noopener');
      seeBtn.textContent = projectsArr[i].btnText;
      btnContainer.appendChild(seeBtn);
    }
  } else {
    containerDesk.style.display = 'none';
  }
}

getProjectsData();

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
