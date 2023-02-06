import { FILMS_DATA } from './render-main-page';
import { getDataFromLocalStorage } from './local-storage-info';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
import { getGenresFromIdModal } from './getGenresFromId';
import { getDataFromLocalStorage } from './local-storage-info';
import { DATA_STORAGE } from './genres';
export { onRenderModal };

const genresData = getDataFromLocalStorage(DATA_STORAGE);
const modalCont = document.querySelector('.modal-film-main');

function onRenderModal(e) {
  // modalCont.innerHTML = '';
  const films = getDataFromLocalStorage(FILMS_DATA);
  const currentFilmCard = e.target.closest('li');
  const filmId = currentFilmCard.getAttribute('id');
  const neededFilmArr = films.filter(film => film.id === Number(filmId));
  const neededFilm = neededFilmArr[0];
  const {
    poster_path,
    vote_count,
    popularity,
    original_title,
    overview,
    title,
    genre_ids: genreIds,
    id,
    release_date,
    vote_average,
  } = neededFilm;
  const basePosterURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const modalMarkup = `
    <div class="img-posters">
      <img class="img-film container" 
      src="${poster_path ? basePosterURL : ComingSoonImg}"  alt="${title}" />
    </div>

    <div class="film-commercial">
      <h2 class="modal-main-title">${title}</h2>
      <table class="shot-inform-film">
        <tbody class="level-intarest">
          <tr class="tr">
            <td class="level-intarest__name">Vote / Votes</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">
              <span class="reting-level">${vote_average}</span> / ${vote_count}
            </td>
          </tr>

          <tr class="tr">
            <td class="level-intarest__name">Popularity</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">${popularity.toFixed(1)}</td>
          </tr>
          <tr class="tr">
            <td class="level-intarest__name">Original Title</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">${original_title}</td>
          </tr>
          <tr class="tr">
            <td class="level-intarest__name">Genre</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">${
              genreIds.length === 0
                ? 'No genre'
                : getGenresFromIdModal(genreIds, genresData)
            }</td>
          </tr>
        </tbody>
      </table>
      <p class="comment-title">About</p>
      <p class="about-film">
       ${overview === '' || !overview ? 'No description...' : overview}
      </p>
      <ul class="modal-Btm">
        <li>
          <button class="addWatchmBtm" type="button">add to Watched</button>
        </li>
        <li>
          <button class="addQueueBtm" type="button">add to queue</button>
        </li>
      </ul>
    </div>
    <button type="button" class="modal-close">
    <svg class="svg-close" width="14" height="14">
      <use href="./images/icons.svg#close"></use>
    </svg>
  </button>`;

  modalCont.innerHTML = modalMarkup;
}

// <button class="svg-close">
//   <i class="ri-close-circle-line"></i>
// </button>;
