/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
const containerDesk = document.querySelector('.containerDesk');

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

function cardGenerator(arr) {
  if (arr.length > 0) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      const cardDiv = document.createElement('li');
      cardDiv.style.backgroundImage = `url(${arr[i].imgUrl})`;
      cardDiv.classList.add('card-dynamic');
      containerDesk.appendChild(cardDiv);
      const cardInfo = document.createElement('ul');
      cardInfo.classList.add('info');
      cardDiv.appendChild(cardInfo);
      const titleContainer = document.createElement('li');
      cardInfo.appendChild(titleContainer);
      const title = document.createElement('h3');
      title.textContent = arr[i].title;
      titleContainer.appendChild(title);
      const textContainer = document.createElement('li');
      cardInfo.appendChild(textContainer);
      const text = document.createElement('p');
      textContainer.appendChild(text);
      text.textContent = arr[i].text;
      const tagList = document.createElement('ul');
      tagList.classList.add('cardTagGroup');
      cardDiv.appendChild(tagList);
      const tag1 = document.createElement('li');
      tag1.textContent = arr[i].tag1;
      tagList.appendChild(tag1);
      const tag2 = document.createElement('li');
      tag2.textContent = arr[i].tag2;
      tagList.appendChild(tag2);
      const tag3 = document.createElement('li');
      tag3.textContent = arr[i].tag3;
      tagList.appendChild(tag3);
      const btnContainer = document.createElement('div');
      btnContainer.classList.add('bottomBtn');
      cardDiv.appendChild(btnContainer);
      const seeBtn = document.createElement('a');
      seeBtn.classList.add('aBtn');
      seeBtn.setAttribute('href', 'https://github.com/jchernandez87/My-Portfolio');
      seeBtn.setAttribute('target', '_blank');
      seeBtn.setAttribute('rel', 'noopener');
      seeBtn.textContent = arr[i].btnText;
      btnContainer.appendChild(seeBtn);
    }
  } else {
    containerDesk.style.display = 'none';
  }
}

export { projectsArr, cardGenerator };