// FT-17 Після натискання на картку фільму на будь-якій сторінці повинна відкриватися модалка з динамічно підставленою інформацією про фільм

const refs = {
  openModalBtn: document.querySelector('.cards__list'),
  closeModalBtn: document.querySelector('.modal-close'),
  modal: document.querySelector('.backdrop'),
};
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(evt) {
  console.log(evt.target.classList);
  // refs.modal.classList.toggle('.visually-hidden');
  if (evt.target.classList.contains('library__image')) {
    console.log('все пропало!');
    console.log(refs.modal.classList);
    refs.modal.classList.remove('visually-hidden');
  }
  if (evt.target.classList.contains('svg-close')) {
    console.log('все не пропало!');
    refs.modal.classList.add('visually-hidden');
    console.log(refs.modal.classList);
  }
  // refs.modal.classList.add('.modal-open');

  // refs.innerHTML = '';
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
