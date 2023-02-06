const dev = [
  {
    name: `Aleks Pastukhov`,
    text: `1`,
    img: `./images/team/1.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Nikita Osokin`,
    text: `2`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `# `,
  },
  {
    name: `Anastasia Knihnitska`,
    text: `3`,
    img: `./images/team/3.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Oleh Buhaichuk`,
    text: `4`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Ivan Chmil`,
    text: `5`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Oleksandr Filippov`,
    text: `6`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Andrey Telnov`,
    text: `7`,
    img: `./images/team/7.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Mykhaylo Yervachov`,
    text: `8`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Mykhailo Vasyliuk`,
    text: `9`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Slava Antolyk`,
    text: `10`,
    img: `./images/team/10.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Bohdan Hromchak`,
    text: `11`,
    img: `./images/team/11.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Egor`,
    text: `12`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
  {
    name: `Kostya`,
    text: `13`,
    img: `./images/team/0.jpg`,
    ml: `#`,
    tg: `#`,
    ln: `#`,
    git: `#`,
  },
];
const refs = {
  openModalBtn: document.querySelector('.footer__but'),
  closeModalBtn: document.querySelector('[data-modal-students-close]'),
  modal: document.querySelector('[data-modal-students]'),
  tumb: document.querySelector(`.inverted_tumb`),
  btnLeft: document.querySelector(`.modal_students_slide_left`),
  btnRight: document.querySelector(`.modal_students_slide_right`),
};

refs.openModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.btnRight.addEventListener(`click`, sliders);
refs.btnLeft.addEventListener(`click`, slidersInvers)

function openModal() {
 
    refs.modal.classList.remove('visually-hidden');
    refs.tumb.innerHTML = createMarkupFirst(dev)
}
function closeModal() {
    refs.modal.classList.add('visually-hidden');
    index = 0
}

let index = 0;
function sliders() {

  index += 1
  refs.tumb.innerHTML = slidersMarkup(dev, index);
  console.log(index);
  if (index >=1 ) {
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
  const firstMarkup = ` <img class="modal_foto" src="${array[0].img}" alt="" width="200" height="200" />
      <div>
        <h3 class="modal_students_name">${array[0].name}</h3>
        <ul class="modal_list">
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[0].ml}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="./images/icons.svg#icon-envelope"></use>
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
                  <use href="./images/icons.svg#icon-send"></use>
                </svg>
              </div>
                <span class="modal_list_text">
                 Telegram    
             </span></a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[0].ln}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="./images/icons.svg#icon-linkedin"></use>
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
                  <use href="./images/icons.svg#icon-github"></use>
                </svg>
              </div>
                <span class="modal_list_text">
                 GitHub    
             </span></a>
          </li>
        </ul>
      </div>`;
  
    return firstMarkup
}

function slidersMarkup(array,index) {
    
    const slidersMarkup = ` <img src="${array[index].img}" alt="" width="200" height="200" />
      <div>
        <h3 class="modal_students_name">${array[index].name}</h3>
        <ul class="modal_list">
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].ml}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="./images/icons.svg#icon-envelope"></use>
                </svg>
              </div>
              E-mail</a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].tg}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="./images/icons.svg#icon-send"></use>
                </svg>
              </div>
                Telegram</a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].ln}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="./images/icons.svg#icon-linkedin"></use>
                </svg>
              </div>
                Linkedin</a>
          </li>
          <li class="modal_list_item">
            <a class="modal_list_link" href="${array[index].git}">
              <div class="modal_list_con">
                <svg class="modal_list_icon" width="15" height="15">
                  <use href="./images/icons.svg#icon-github"></use>
                </svg>
              </div>
                GitHub</a>
          </li>
        </ul>
      </div>`;
    
    return slidersMarkup;
}
 