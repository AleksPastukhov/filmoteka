// FT-14 За натисканням на кнопку "Watched" показуються переглянуті фільми користувача
// FT-15 За натисканням на кнопку "Queue" показуються фільми додані в чергу користувача
import renderFilmsToGallery from './galleryFilmsMarkup';
import { Spinner } from './loader.js';
import { getDataFromLocalStorage } from './local-storage-info';
import { onFilmCardClick } from './modal';

const refs = {
  watchedBtn: document.querySelector('button.watched'),
  queueBtn: document.querySelector('button.queue'),
  libraryContainer: document.querySelector('.library__container'),
  libraryList: document.querySelector('.library__list'),
  emptyLibrary: document.querySelector('.empty-library'),
  libraryName: document.querySelector('span.library-name'),
};

const spinner = new Spinner('.spinner');

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick(event) {
  spinner.addSpinner();
  changeActiveBtn(refs.watchedBtn, refs.queueBtn);
  // renderSavedMovies('watched');
  refs.libraryName.textContent = 'watched';
  // onFilmCardClick(event);
}
function onQueueBtnClick(event) {
  spinner.addSpinner();
  changeActiveBtn(refs.queueBtn, refs.watchedBtn);
  // renderSavedMovies('queue');
  refs.libraryName.textContent = 'queue';
  // onFilmCardClick(event);
}
function changeActiveBtn(btn1, btn2) {
  btn1.classList.add('is-active');
  btn2.classList.remove('is-active');
}
// function renderSavedMovies(library) {
//   const savedMovies = getDataFromLocalStorage(library);
//   spinner.addSpinner();
//   if (savedMovies) {
//     emptyLibrary.classList.add('visually-hidden');
//     // renderFilmsToGallery(savedMovies);
//   }
//   spinner.removeSpinner();
// }

onWatchedBtnClick();

function addMovieToLS(library) {
  const savedMovies = getDataFromLocalStorage(libraryName);
  savedMovies.unshift(currentMovieData);
  saveDataToLocalStorage(library, savedMovies);
  // renderFilmsToGallery(savedMovies);
}

function removeMovieFromLS(library) {
  const savedMovies = getDataFromLocalStorage(library) || '[]';
  const indexOfMovieToDelete = savedMovies.findIndex(
    e => e.id === currentMovieData.id
  );
  savedMovies.splice(indexOfMovieToDelete, 1);
  saveDataToLocalStorage(library, savedMovies);
  // renderFilmsToGallery(savedMovies);
}
