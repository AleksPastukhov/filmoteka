// FT-17 Після натискання на картку фільму на будь-якій сторінці повинна відкриватися модалка з динамічно підставленою інформацією про фільм

(() => {
  //   const refs = {
  //     openModalBtn: document.querySelector('[data-modal-open]'),
  //     closeModalBtn: document.querySelector('[data-modal-close]'),
  //     modal: document.querySelector('[data-modal]'),
  //   };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

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
