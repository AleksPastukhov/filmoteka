// FT-14 За натисканням на кнопку "Watched" показуються переглянуті фільми користувача
// FT-15 За натисканням на кнопку "Queue" показуються фільми додані в чергу користувача
// FT-18 За натисканням на кнопку "Add to watched" фільм додається до переглянутих фільмів поточного користувача (localStorage)
// FT-19 За натисканням на кнопку "Add to queue" фільм додається до черги поточного користувача (localStorage)

import { Spinner } from './loader.js';
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from './local-storage-info';

const refs = {
  watchedBtn: document.querySelector('button.watched'),
  queueBtn: document.querySelector('button.queue'),
  libraryContainer: document.querySelector('.library__container'),
  libraryList: document.querySelector('.library__list'),
  emptyLibrary: document.querySelector('.empty-library'),
  libraryName: document.querySelector('span.library-name'),
};
const spinner = new Spinner('.spinner');
let currentMovieData = {};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  spinner.addSpinner();
  changeActiveBtn(refs.watchedBtn, refs.queueBtn);
  renderSavedMovies('watched');
  refs.libraryName.textContent = 'watched';
  setTimeout(() => {
    spinner.removeSpinner();
  }, 800);
  // initModal();
}
function onQueueBtnClick() {
  spinner.addSpinner();
  changeActiveBtn(refs.queueBtn, refs.watchedBtn);
  renderSavedMovies('queue');
  refs.libraryName.textContent = 'queue';
  setTimeout(() => {
    spinner.removeSpinner();
  }, 800);
  // initModal();
}
function changeActiveBtn(btn1, btn2) {
  btn1.classList.add('is-active');
  btn2.classList.remove('is-active');
}
function renderSavedMovies(library) {
  const savedMovies = getDataFromLocalStorage(library);
  spinner.addSpinner();
  if (savedMovies) {
    emptyLibrary.classList.add('visually-hidden');
    // renderMarkup(savedMovies);
  }
  spinner.removeSpinner();
}
function saveMovie(library) {
  const savedMovies = getDataFromLocalStorage(library);
  savedMovies.unshift(currentMovieData);
  saveDataToLocalStorage(library, savedMovies);
}
function isMovieInStorage(library) {
  const savedMovies = getDataFromLocalStorage(library);
  if (!savedMovies) {
    saveDataToLocalStorage(library, '[]');
    return false;
  }
  return savedMovies.some(e => e.id === currentMovieData.id);
}
function deleteMovie(library) {
  const savedMovies = getDataFromLocalStorage(library);
  const indexOfMovieToDelete = savedMovies.findIndex(
    e => e.id === currentMovieData.id
  );
  savedMovies.splice(indexOfMovieToDelete, 1);
  saveDataToLocalStorage(library, savedMovies);
  // renderMarkup(savedMovies);
}
function changeBtnName(library) {
  const actionName = isMovieInStorage(library) ? 'delete from ' : 'add to ';
  switch (library) {
    case 'watched':
      refs.btn1.textContent = (actionName + library).toUpperCase();
      return;
    case 'queue':
      refs.btn2.textContent = (actionName + library).toUpperCase();
      return;
  }
}

onWatchedBtnClick();
