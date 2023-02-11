import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from './local-storage-info';

export function saveMovieToLibrary(movie) {
  const refs = {
    addToWatchedBtn: document.querySelector('.addWatchmBtm'),
    addToQueueBtn: document.querySelector('.addQueueBtm'),
  };
  const currentMovie = movie;

  refs.addToWatchedBtn.addEventListener('click', addMovieToWatched);
  refs.addToWatchedBtn.addEventListener('click', removeFromWatched);
  refs.addToQueueBtn.addEventListener('click', addMovieToQueue);
  refs.addToQueueBtn.addEventListener('click', removeFromQueue);

  function checkLS() {
    if (isMovieInStorage('watched', currentMovie)) {
      changeBtnName('watched', currentMovie);
      refs.addToWatchedBtn.dataset.action = 'remove';
      refs.addToWatchedBtn.classList.add('added');
    } else {
      refs.addToWatchedBtn.dataset.action = 'add';
      refs.addToWatchedBtn.classList.remove('added');
    }
    if (isMovieInStorage('queue', currentMovie)) {
      changeBtnName('queue', currentMovie);
      refs.addToQueueBtn.dataset.action = 'remove';
      refs.addToQueueBtn.classList.add('added');
    } else {
      refs.addToQueueBtn.dataset.action = 'add';
      refs.addToQueueBtn.classList.remove('added');
    }
  }
  checkLS();

  function addMovieToWatched() {
    if (isMovieInStorage('watched', currentMovie)) {
      return;
    }
    refs.addToWatchedBtn.dataset.action === 'remove';
    addMovieToLS('watched', currentMovie);
    changeBtnName('watched', currentMovie);
    checkLS();
    refs.addToWatchedBtn.removeEventListener('click', addMovieToWatched);
    refs.addToWatchedBtn.addEventListener('click', removeFromWatched);
  }
  if (refs.addToWatchedBtn.textContent === 'add to watched') {
    refs.addToWatchedBtn.removeEventListener('click', removeFromWatched);
  } else if (refs.addToWatchedBtn.textContent === 'remove from watched') {
    refs.addToWatchedBtn.removeEventListener('click', addMovieToWatched);
  }
  function addMovieToQueue() {
    if (isMovieInStorage('queue', currentMovie)) {
      return;
    }
    refs.addToQueueBtn.dataset.action === 'remove';
    addMovieToLS('queue', currentMovie);
    changeBtnName('queue', currentMovie);
    checkLS();
    refs.addToQueueBtn.removeEventListener('click', addMovieToQueue);
    refs.addToQueueBtn.addEventListener('click', removeFromQueue);
  }
  if (refs.addToQueueBtn.textContent === 'add to queue') {
    refs.addToQueueBtn.removeEventListener('click', removeFromQueue);
  } else if (refs.addToQueueBtn.textContent === 'remove from queue') {
    refs.addToQueueBtn.removeEventListener('click', addMovieToQueue);
  }
  function removeFromWatched() {
    if (!isMovieInStorage('watched', currentMovie)) {
      return;
    }
    if (isMovieInStorage('watched', currentMovie)) {
      refs.addToWatchedBtn.dataset.action === 'add';
      removeMovieFromLS('watched', currentMovie);
      changeBtnName('watched', currentMovie);
      checkLS();
      refs.addToWatchedBtn.removeEventListener('click', removeFromWatched);
      refs.addToWatchedBtn.addEventListener('click', addMovieToWatched);
    }
  }
  function removeFromQueue() {
    if (!isMovieInStorage('queue', currentMovie)) {
      return;
    }
    if (isMovieInStorage('queue', currentMovie)) {
      refs.addToQueueBtn.dataset.action === 'add';
      removeMovieFromLS('queue', currentMovie);
      changeBtnName('queue', currentMovie);
      checkLS();
      refs.addToQueueBtn.removeEventListener('click', removeFromQueue);
      refs.addToQueueBtn.addEventListener('click', addMovieToQueue);
    }
  }
  function isMovieInStorage(library, currentMovie) {
    const savedMovies = getDataFromLocalStorage(library);
    if (!savedMovies) {
      saveDataToLocalStorage(library, '[]');
      return false;
    }
    return savedMovies.some(e => e.id === currentMovie.id);
  }
  function changeBtnName(library, currentMovie) {
    const actionName = isMovieInStorage(library, currentMovie)
      ? 'delete from '
      : 'add to ';
    switch (library) {
      case 'watched':
        if (refs.addToWatchedBtn) {
          refs.addToWatchedBtn.textContent = (
            actionName + library
          ).toUpperCase();
        } else {
          refs.removeFromWatchedBtn.textContent = (
            actionName + library
          ).toUpperCase();
        }
        return;
      case 'queue':
        if (refs.addToQueueBtn) {
          refs.addToQueueBtn.textContent = (actionName + library).toUpperCase();
        } else {
          refs.removeFromQueueBtn.textContent = (
            actionName + library
          ).toUpperCase();
        }
        return;
    }
  }
  function addMovieToLS(library, currentMovie) {
    const savedMovies = getDataFromLocalStorage(library) || [];
    savedMovies.unshift(currentMovie);
    saveDataToLocalStorage(library, savedMovies);
  }
  function removeMovieFromLS(library, currentMovie) {
    const savedMovies = getDataFromLocalStorage(library) || [];
    const indexOfMovieToDelete = savedMovies.findIndex(
      e => e.id === currentMovie.id
    );
    savedMovies.splice(indexOfMovieToDelete, 1);
    saveDataToLocalStorage(library, savedMovies);
  }
}
