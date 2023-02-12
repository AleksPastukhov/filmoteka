import { onRenderModal } from './renderModal';
import { onTrailerBtn } from './trailer';
import { removeDataFromLocalStorage } from './local-storage-info';
import { libraryHandler } from './myLibrary';

const refs = {
  filmGalaryContainer: document.querySelector('.home'),
  modal: document.querySelector('.backdrop'),
};

if (refs.filmGalaryContainer) {
  refs.filmGalaryContainer.addEventListener('click', onFilmCardClick);
}

export function onFilmCardClick(evt) {
  evt.preventDefault();

  if (
    !evt.target.classList.contains('library__item') &&
    !evt.target.classList.contains('library__link') &&
    !evt.target.classList.contains('library__thumb') &&
    !evt.target.classList.contains('library__image') &&
    !evt.target.classList.contains('library__paragraph') &&
    !evt.target.classList.contains('library__movie') &&
    !evt.target.classList.contains('library__info') &&
    !evt.target.classList.contains('library__description') &&
    !evt.target.classList.contains('library__genres') &&
    !evt.target.classList.contains('library__year') &&
    !evt.target.classList.contains('library__rating')
  ) {
    return;
  }
  onRenderModal(evt);
  const closeModalBtn = document.querySelector('.modal-close');
  closeModalBtn.addEventListener('click', onCloseBtnClick);
  refs.modal.classList.remove('is-hidden');
  onMovieCardClick();
  document.body.style.overflow = 'hidden';
}

function onCloseBtnClick() {
  refs.modal.classList.add('is-hidden');
  document.body.style.overflow = 'auto';
  removeDataFromLocalStorage('currentMovie');
  libraryHandler();
}
function onMovieCardClick(evt) {
  window.addEventListener('keydown', onKeyEscpPress);

  function onKeyEscpPress(evt) {
    if (evt.code !== 'Escape') {
      return;
    }

    onCloseBtnClick();
    window.removeEventListener('keydown', onKeyEscpPress);
  }
  refs.modal.addEventListener('click', onBackdropClick);
  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onCloseBtnClick();
    }
  }
  // Трейлер
  const trailerBtn = document.querySelector('.trailer-btn');
  const filmId = trailerBtn.getAttribute('data-id');
  trailerBtn.addEventListener('click', onTrailerBtn);
}
