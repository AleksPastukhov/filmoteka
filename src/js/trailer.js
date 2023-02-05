import * as basicLightbox from 'basiclightbox';
import 'remixicon/fonts/remixicon.css';
import FilmsApiService from './films-service';

const filmServise = new FilmsApiService();
const trailerBtn = document.querySelector('.trailer-btn');
const filmId = trailerBtn.dataset.id;

trailerBtn.addEventListener('click', onTrailerBtn);

function onTrailerBtn() {
  filmServise.getFilmById('video', filmId).then(({ results }) => {
    const trailerKey = results[0].key;

    const instance = basicLightbox.create(` 
<div class="trailer-wrapper">

  <button class="trailer-btn-close">
    <i class="ri-close-circle-line"></i>
  </button>

  <iframe class="trailer-iframe" src="https://www.youtube.com/embed/${trailerKey}">
  </iframe>

</div>
`);
    instance.show();

    const trailerCLosedBtn = document.querySelector('.trailer-btn-close');

    trailerCLosedBtn.addEventListener('click', onCloseBtn);
    function onCloseBtn() {
      instance.close();
    }

    trailerBtn.addEventListener('keydown', onEscape);
    function onEscape(evt) {
      if (evt.code === 'Escape') {
        instance.close();
        trailerBtn.removeEventListener('keydown', onEscape);
      }
    }
  });
}
