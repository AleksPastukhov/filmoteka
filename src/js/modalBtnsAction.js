// FT-18 За натисканням на кнопку "Add to watched" фільм додається до переглянутих фільмів поточного користувача (localStorage)
// FT-19 За натисканням на кнопку "Add to queue" фільм додається до черги поточного користувача (localStorage)
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from './local-storage-info';

const refs = {
  addToWatchedBtn: document.querySelector('.addWatchmBtm'),
  addToQueueBtn: document.querySelector('.addQueueBtm'),
};
let currentMovieData = {};

refs.addToWatchedBtn.addEventListener('click', addMovieToWatched);
refs.addToQueueBtn.addEventListener('click', addMovieToQueue);

function addMovieToWatched() {
  if (isMovieInStorage('watched')) {
    return;
  }
  console.log('added to watched');
  refs.addToWatchedBtn.textContent = 'remove from watched';
  // changeBtnName('watched');
}

function addMovieToQueue() {
  console.log('added to queue');
  refs.addToQueueBtn.textContent = 'remove from queue';
  // changeBtnName('queue');
}

function isMovieInStorage(library) {
  const savedMovies = getDataFromLocalStorage(library);
  if (!savedMovies) {
    saveDataToLocalStorage(library, '[]');
    return false;
  }
  // return savedMovies.some(e => e.id === currentMovieData.id);
}

function changeBtnName(library) {
  const actionName = isMovieInStorage(library) ? 'delete from ' : 'add to ';
  switch (library) {
    case 'watched':
      refs.addToWatchedBtn.textContent = (actionName + library).toUpperCase();
      return;
    case 'queue':
      refs.addToQueueBtn.textContent = (actionName + library).toUpperCase();
      return;
  }
}

export function addMovieToLS(library) {
  const savedMovies = getDataFromLocalStorage(libraryName);
  savedMovies.unshift(currentMovieData);
  saveDataToLocalStorage(library, savedMovies);
}

export function removeMovieFromLS(library) {
  const savedMovies = getDataFromLocalStorage(library) || '[]';
  const indexOfMovieToDelete = savedMovies.findIndex(
    e => e.id === currentMovieData.id
  );
  savedMovies.splice(indexOfMovieToDelete, 1);
  saveDataToLocalStorage(library, savedMovies);
}
