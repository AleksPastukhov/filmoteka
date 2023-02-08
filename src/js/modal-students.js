import iconEnvelope from '../images/icons.svg';
import iconSend from '../images/icons.svg';
import iconLinkedin from '../images/icons.svg';
import iconGithub from '../images/icons.svg';
import photo1 from '../images/team/photo1.jpg';
import photo2 from '../images/team/photo2.jpg';
import photo3 from '../images/team/photo3.jpg';
import photo4 from '../images/team/photo0.jpg';
import photo5 from '../images/team/photo0.jpg';
import photo6 from '../images/team/photo6.jpg';
import photo7 from '../images/team/photo7.jpg';
import photo8 from '../images/team/photo8.jpg';
import photo9 from '../images/team/photo0.jpg';
import photo10 from '../images/team/photo0.jpg';
import photo11 from '../images/team/photo11.jpg';
// import photo12 from '../images/team/photo12.jpg';
import photo13 from '../images/team/photo0.jpg';
const dev = [
  {
    name: `Aleks Pastukhov`,
    text: `1`,
    img: photo1,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Nikita Osokin`,
    text: `2`,
    img: photo2,
    ml: `hitchensnik@gmail.com `,
    tg: `https://t.me/OsokinNikita`,
    ln: `https://www.linkedin.com/in/nikita-osokin-developer`,
    git: `https://github.com/OsokinNikita`,
  },
  {
    name: `Anastasia Knihnitska`,
    text: `3`,
    img: photo3,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Oleh Buhaichuk`,
    text: `4`,
    img: photo4,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Ivan Chmil`,
    text: `5`,
    img: photo5,
    ml: `ivan.chmil.98@gmail.com`,
    tg: `https://t.me/slava_zevsu`,
    ln: `https://www.linkedin.com/in/ivan-chmil-u/`,
    git: `https://github.com/W1n-chester`,
  },
  {
    name: `Oleksandr Filippov`,
    text: `6`,
    img: photo6,
    ml: `alexfilp17@gmail.com`,
    tg: `https://github.com/AlexFilp`,
    ln: `https://www.linkedin.com/in/oleksandr-filippov-93b911263/`,
    git: `https://t.me/Filippov_Oleksandr`,
  },
  {
    name: `Andrey Telnov`,
    text: `7`,
    img: photo7,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Mykhaylo Yervachov`,
    text: `8`,
    img: photo8,
    ml: `m.yervachov@gmail.com`,
    tg: `https://t.me/Mixayl`,
    ln: `https://www.linkedin.com/in/michael-yervach%C3%B6v-2b5b06170/`,
    git: `https://github.com/MykhayloOdesa`,
  },
  {
    name: `Mykhailo Vasyliuk`,
    text: `9`,
    img: photo9,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Slava Antolyk`,
    text: `10`,
    img: photo10,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Bohdan Hromchak`,
    text: `11`,
    img: photo11,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Kravchenko Yehor`,
    text: `12`,
//     img: photo12,
    ml: `Sugonegor@gmail.com`,
    tg: `https://t.me/Egorin93`,
    ln: `#`,
    git: `https://github.com/primarch93`,
  },
  {
    name: `Kostya`,
    text: `13`,
    img: photo13,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
];
const refs = {
  openModalBtn: document.querySelector('[data-modal-students-open]'),
  closeModalBtn: document.querySelector('[data-modal-students-close]'),
  modal: document.querySelector('[data-modal-students]'),
  tumb: document.querySelector(`.inverted_tumb`),
  btnLeft: document.querySelector(`.modal_students_slide_left`),
  btnRight: document.querySelector(`.modal_students_slide_right`),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.btnRight.addEventListener(`click`, sliders);
refs.btnLeft.addEventListener(`click`, slidersInvers);

function openModal() {
  refs.modal.classList.remove('visually-hidden');
  refs.tumb.innerHTML = createMarkupFirst(dev);
}
function closeModal() {
  refs.modal.classList.add('visually-hidden');
  refs.btnLeft.classList.add('visually-hidden');
  refs.btnRight.classList.remove('visually-hidden');
  index = 0;
}

let index = 0;
function sliders() {
  index += 1;
  refs.tumb.innerHTML = slidersMarkup(dev, index);
  console.log(index);
  if (index >= 1) {
    refs.btnLeft.classList.remove('visually-hidden');
  }
  if (index >= 12) {
    refs.btnRight.classList.add('visually-hidden');
  }
}
function slidersInvers() {
  index -= 1;
  refs.tumb.innerHTML = slidersMarkup(dev, index);
  if (index >= 1) {
    refs.btnRight.classList.remove('visually-hidden');
  }
  if (index <= 0) {
    refs.btnLeft.classList.add('visually-hidden');
  }
}

function createMarkupFirst(array) {
  const firstMarkup = ` <img class="modal_foto img" src="${array[0].img}" alt="" width="200" height="200" />
      <div>
        <h3 class="modal_students_name">${array[0].name}</h3>
        <ul class="modal_list">
          <li class="modal_list_item">
            <a class="modal_list_link" href="mailto:${array[0].ml}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconEnvelope}#icon-envelope"></use>
                </svg>
              </div>
              <span class="modal_list_text" >      
                 E-mail
              </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[0].tg}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconSend}#icon-send"></use>
                </svg>
              </div><span class="modal_list_text">
                 Telegram </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[0].ln}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconLinkedin}#icon-linkedin"></use>
                </svg>
              </div>
                <span class="modal_list_text">
                 Linkedin    
              </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[0].git}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconGithub}#icon-github"></use>
                </svg>
              </div>
                <span class="modal_list_text">
                 GitHub    
             </span></a>
          </li>
        </ul>
      </div>`;

  return firstMarkup;
}

function slidersMarkup(array, index) {
  const slidersMarkup = ` <img class="modal_foto img" src="${array[index].img}" alt="" width="200" height="200" />
      <div>
        <h3 class="modal_students_name">${array[index].name}</h3>
        <ul class="modal_list">
          <li class="modal_list_item">
            <a class="modal_list_link" href="mailto:${array[index].ml}" target="_blank">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconEnvelope}#icon-envelope"></use>
                </svg>
              </div>
              <span class="modal_list_text" >      
                 E-mail
              </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].tg}" target="_blank">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconSend}#icon-send"></use>
                </svg>
              </div><span class="modal_list_text">
                 Telegram </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].ln}" target="_blank">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconLinkedin}#icon-linkedin"></use>
                </svg>
              </div><span class="modal_list_text">
                 Linkedin    
              </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].git}" target="_blank">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconGithub}#icon-github"></use>
                </svg>
              </div><span class="modal_list_text">
                 GitHub    
             </span></a>
          </li>
        </ul>
      </div>`;

  return slidersMarkup;
}
