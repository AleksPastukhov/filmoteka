// FT-17 Після натискання на картку фільму на будь-якій сторінці повинна відкриватися модалка з динамічно підставленою інформацією про фільм

// const refs = {
//   openModalBtn: document.querySelector('.cards__list'),
//   closeModalBtn: document.querySelector('.modal-close'),
//   modal: document.querySelector('.backdrop'),
// };
// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal(evt) {
//   console.log(evt.target.classList);
//   if (evt.target.classList.contains('library__image')) {
//     console.log('Відкриття модалки');
//     console.log(refs.modal.classList);
//     refs.modal.classList.remove('visually-hidden');
//   }
//   if (evt.target.classList.contains('svg-close')) {
//     console.log('Закриття модалки');
//     refs.modal.classList.add('visually-hidden');
//     console.log(refs.modal.classList);
//   }
//   if (evt.currentTarget.classList.contains('modal-close')) {
//     console.log('Закриття модалки');
//     refs.modal.classList.add('visually-hidden');
//     console.log(refs.modal.classList);
//   }
// }
const refs = {
  filmGalaryContainer: document.querySelector('.home'),
  closeModalBtn: document.querySelector('.modal-close'),
  modal: document.querySelector('.backdrop'),
};

refs.filmGalaryContainer.addEventListener('click', onFilmCardClick);
refs.closeModalBtn.addEventListener('click', onCloseBtnClick);

function onFilmCardClick(evt) {
  evt.preventDefault();
  console.log(evt.target.classList);

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

  refs.modal.classList.remove('visually-hidden');
  onMovieCardClick();
  document.body.style.overflow = 'hidden';
}

function onCloseBtnClick() {
  refs.modal.classList.add('visually-hidden');
  document.body.style.overflow = 'auto';
}
const filmGalaryContainer = document.querySelector('.home');

filmGalaryContainer.addEventListener('click', onMovieCardClick);

function onMovieCardClick(evt) {
  // evt.preventDefault();
  // console.log(evt.target.classList);

  // if (
  //   !evt.target.classList.contains('cards__text') &&
  //   !evt.target.classList.contains('cards__thumb') &&
  //   !evt.target.classList.contains('cards__link') &&
  //   !evt.target.classList.contains('cards__item')
  // ) {
  //   console.log('клік не на картку');
  //   return;
  // }

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
}
// fetch(
//   'https://api.themoviedb.org/3/trending/movie/day?api_key=008ad61af513926e956f6d36edd6996c'
// )
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getData() {
//   const response = await fetch(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=008ad61af513926e956f6d36edd6996c'
//   );
//   return response;
// }
// getData()
//   .then(response => response.json())
//   .then(data => console.log(data));
