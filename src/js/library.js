// FT-14 За натисканням на кнопку "Watched" показуються переглянуті фільми користувача
// FT-15 За натисканням на кнопку "Queue" показуються фільми додані в чергу користувача
// FT-18 За натисканням на кнопку "Add to watched" фільм додається до переглянутих фільмів поточного користувача (firebase)
// FT-19 За натисканням на кнопку "Add to queue" фільм додається до черги поточного користувача (firebase)

import { Spinner } from './loader.js';

// import from './';

const spinner = new Spinner('.spinner');

const refs = {
  watchedBtn: document.querySelector('button.watched'),
  queueBtn: document.querySelector('button.queue'),
  library: document.querySelector('library__container'),
  libraryList: document.querySelector('library__list'),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('is-active');
  refs.queueBtn.classList.remove('is-active');
  spinner.addSpinner();
  setTimeout(() => {
    spinner.removeSpinner();
  }, 2000);
}

function onQueueBtnClick() {
  refs.queueBtn.classList.add('is-active');
  refs.watchedBtn.classList.remove('is-active');
  spinner.addSpinner();
  setTimeout(() => {
    spinner.removeSpinner();
  }, 2000);
}
