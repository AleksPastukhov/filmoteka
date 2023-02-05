import * as basicLightbox from 'basiclightbox';
// console.log(basicLightbox);

// JS
import FilmsApiService from './films-service';

// const filmServise = new FilmsApiService();

// const trailerBtn = document.querySelector('.trailer-btn');

// const filmId = trailerBtn.getAttribute('data-id');

// trailerBtn.addEventListener('click', onYoutubeBtn);

function onYoutubeBtn() {
  filmServise.getFilmById('video', filmId).then(({ results }) => {
    const trailerKey = results[0].key;

    if (!trailerKey) {
      return;
    }

    const instance = basicLightbox.create(`
      <iframe
        class="trailer-iframe"
        src="https://www.youtube.com/embed/${trailerKey}"
      >
      </iframe>
  
`);

    instance.show();
  });
}

// HTML

// <div class="img-posters">
//   <img class="img-film container" src="#" alt="#" />
//   <button class="trailer-btn" data-id="500">
//     <svg class="trailer-icon" width="80" height="80">
//       <use href="./images/icons.svg#trailer-btn"></use>
//     </svg>
//   </button>
// </div>;

// SCSS

// .img-posters {
//   position: relative;
//   transition: 0.4s;
// }
// .trailer-btn {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 80px;
//   height: 80px;
//   background-color: transparent;
//   fill: #f79c78;
//   cursor: pointer;
//   transition: 0.4s;
// }
// .img-posters:hover,
// .img-posters:focus {
//   opacity: 0.9;
//   .trailer-btn {
//     fill: var(--accent-color);
//     scale: 1.3;
//   }
// }
// .trailer-icon {
//   color: currentColor;
// }
// .trailer-iframe {
//   width: 75%;
//   aspect-ratio: 16 / 9;
// }
