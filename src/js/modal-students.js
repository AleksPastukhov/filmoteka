import iconEnvelope from '../images/icons.svg';
import iconSend from '../images/icons.svg';
import iconLinkedin from '../images/icons.svg';
import iconGithub from '../images/icons.svg';
import photo1 from '../images/team/photo1.jpg';
import photo2 from '../images/team/photo2.jpg';
import photo3 from '../images/team/photo3.jpg';
import photo4 from '../images/team/photo4.jpg';
import photo5 from '../images/team/photo5.jpg';
import photo6 from '../images/team/photo6.jpg';
import photo7 from '../images/team/photo7.jpg';
import photo8 from '../images/team/photo8.jpg';
import photo9 from '../images/team/photo9.jpg';
import photo10 from '../images/team/photo10.jpg';
import photo11 from '../images/team/photo11.jpg';
import photo12 from '../images/team/photo12.jpg';
import photo13 from '../images/team/photo13.jpg';

const dev = [
  {
    name: `Aleks Pastukhov`,
    text: `1`,
    role: `Team lead`,
    img: photo1,
    ml: `oleksandr.s.pastukhov@gmail.com`,
    tg: `https://t.me/aleks_pastukhov`,
    ln: `https://www.linkedin.com/in/oleksandr-pastukhov/`,
    git: `https://github.com/AleksPastukhov`,
  },
  {
    name: `Nikita Osokin`,
    text: `2`,
    role: `Scrum master `,
    img: photo2,
    ml: `hitchensnik@gmail.com `,
    tg: `https://t.me/OsokinNikita`,
    ln: `https://www.linkedin.com/in/nikita-osokin-developer`,
    git: `https://github.com/OsokinNikita`,
  },
  {
    name: `Anastasia Knihnitska`,
    text: `3`,
    role: `Developer`,
    img: photo3,
    ml: `anastazja.knihnitska@gmail.com`,
    tg: `https://t.me/nastiaknik`,
    ln: `https://www.linkedin.com`,
    git: `https://github.com/nastiaknik`,
  },
  {
    name: `Oleh Buhaichuk`,
    text: `4`,
    role: `Developer`,
    img: photo4,
    ml: `oleg-747@ukr.net`,
    tg: `https://t.me/buga_ua`,
    ln: `https://www.linkedin.com/in/oleh-buhaichuk/`,
    git: `https://github.com/buga747`,
  },
  {
    name: `Ivan Chmil`,
    text: `5`,
    role: `Developer`,
    img: photo5,
    ml: `ivan.chmil.98@gmail.com`,
    tg: `https://t.me/slava_zevsu`,
    ln: `https://www.linkedin.com/in/ivan-chmil-u/`,
    git: `https://github.com/W1n-chester`,
  },
  {
    name: `Oleksandr Filippov`,
    text: `6`,
    role: `Developer`,
    img: photo6,
    ml: `alexfilp17@gmail.com`,
    tg: `https://github.com/AlexFilp`,
    ln: `https://www.linkedin.com/in/oleksandr-filippov-93b911263/`,
    git: `https://t.me/Filippov_Oleksandr`,
  },
  {
    name: `Andrey Telnov`,
    text: `7`,
    role: `Developer`,
    img: photo7,
    ml: `andreytelnov30@gmail.com`,
    tg: `https://t.me/Man_is_Doc`,
    ln: `https://www.linkedin.com`,
    git: `https://github.com/Minaht007`,
  },
  {
    name: `Mykhaylo Yervachov`,
    text: `8`,
    role: `Developer`,
    img: photo8,
    ml: `m.yervachov@gmail.com`,
    tg: `https://t.me/Mixayl`,
    ln: `https://www.linkedin.com/in/michael-yervach%C3%B6v-2b5b06170/`,
    git: `https://github.com/MykhayloOdesa`,
  },
  {
    name: `Mykhailo Vasyliuk`,
    text: `9`,
    role: `Developer`,
    img: photo9,
    ml: `Misha.vasyliuk@gmail.com`,
    tg: `https://t.me/MykhailoVasyliuk`,
    ln: `https://www.linkedin.com/in/mykhailo-vasyliuk-02b409263`,
    git: `https://github.com/MykhailoVasyliuk`,
  },
  {
    name: `Slava Antolyk`,
    text: `10`,
    role: `Developer`,
    img: photo10,
    ml: `sl.antolyk@gmail.com`,
    tg: `https://web.telegram.org/z/#5309142755`,
    ln: `https://www.linkedin.com`,
    git: `https://github.com/SlavaAnt`,
  },
  {
    name: `Bohdan Hromchak`,
    text: `11`,
    role: `Developer`,
    img: photo11,
    ml: `gromchakbogdan@gmail.com`,
    tg: `https://t.me/HromB`,
    ln: ` https://www.linkedin.com/in/bohdan-hromchak-21127315b/`,
    git: `https://github.com/BohdanHromchak`,
  },
  {
    name: `Kravchenko Yehor`,
    text: `12`,
    role: `Developer`,
    img: photo12,
    ml: `Sugonegor@gmail.com`,
    tg: `https://t.me/Egorin93`,
    ln: `https://www.linkedin.com`,
    git: `https://github.com/primarch93`,
  },
  {
    name: `Konstantin Prokhorchuk`,
    text: `13`,
    role: `Developer`,
    img: photo13,
    ml: `pscosx@gmail.com`,
    tg: `https://t.me/KostyaProkhorchuk`,
    ln: `https://www.linkedin.com`,
    git: `https://github.com/Konstantin2023`,
  },
];
// const modal = document.querySelector('.backdrop');
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
  refs.modal.classList.remove('is-hidden');
  refs.tumb.innerHTML = createMarkupFirst(dev);
  window.addEventListener('keydown', onKeyEscpPress);
  refs.modal.addEventListener('click', onBackdropClick);
}
function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.btnLeft.classList.add('visually-hidden');
  refs.btnRight.classList.remove('visually-hidden');
  index = 0;
}
//ЗАКРЫТИЕ ПО ESCP И ПО МИСКЛИКУ
function onKeyEscpPress(evt) {
  if (evt.code !== 'Escape') {
    return;
  }

  closeModal();
  window.removeEventListener('keydown', onKeyEscpPress);
}
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}
// //////////////////////////
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
        <p class="modal_students_role"><span><</span>${array[0].role}<span>/></span></p>
        <ul class="modal_list">
          <li class="modal_list_item">
            <a class="modal_list_link" href="mailto:${array[0].ml}" target="_blank">
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
            <a class="modal_list_link" href="${array[0].tg}" target="_blank">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="${iconSend}#icon-send"></use>
                </svg>
              </div><span class="modal_list_text">
                 Telegram </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[0].ln}" target="_blank">
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
            <a class="modal_list_link" href="${array[0].git}" target="_blank">
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
        <p class="modal_students_role"><span><</span>${array[index].role}<span>/></span></p>
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
