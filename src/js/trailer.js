// FT-24 Реалізувати показ трейлеру фільма (мобілка, планшет, десктоп).

import * as basicLightbox from 'basiclightbox';
import 'remixicon/fonts/remixicon.css';
import FilmsApiService from './films-service';
export { onTrailerBtn };
const filmServise = new FilmsApiService();

function onTrailerBtn() {
  const trailerBtn = document.querySelector('.trailer-btn');
  const filmId = trailerBtn.getAttribute('data-id');
  filmServise.getFilmById('video', filmId).then(({ results }) => {
    if (results.length === 0) {
      trailerBtn.classList.remove('trailer-btn');
      trailerBtn.classList.add('trailer-false-request');
      trailerBtn.innerHTML = `Oops... We missed the trailer :(`;
    }
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

    // trailerBtn.addEventListener('keydown', onEscape);
    // function onEscape(evt) {
    //   if (evt.code === 'Escape') {
    //     instance.close();
    //     trailerBtn.removeEventListener('keydown', onEscape);
    //   }
    // }
  });
}
