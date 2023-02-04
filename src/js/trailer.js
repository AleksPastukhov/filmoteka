import * as basicLightbox from 'basiclightbox';
// console.log(basicLightbox);

// HTML
// <div class="cont">
//   <button class="trailer-btn" data-id="500">
//     <svg class="trailer-icon" width="80" height="80">
//       <use href="./images/icons.svg#play-outline"></use>
//     </svg>
//   </button>
// </div>;

// JS
// import FilmsApiService from './films-service';

// const filmServise = new FilmsApiService();
// const trailerBtn = document.querySelector('.trailer-btn');
// const filmId = trailerBtn.dataset.id;

// trailerBtn.addEventListener('click', onYoutubeBtn);

// function onYoutubeBtn() {
//   filmServise.getFilmById('video', filmId).then(({ results }) => {
//     const trailerKey = results[0].key;

//     if (!trailerKey) {
//       return;
//     }

//     const instance = basicLightbox.create(`
//     <iframe class="trailer-iframe" width="80%" width="420" height="315"
// src="https://www.youtube.com/embed/${trailerKey}">
// </iframe>

// `);

//     instance.show();
//   });
