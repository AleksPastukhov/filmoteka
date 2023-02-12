import { getDataFromLocalStorage } from './local-storage-info';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
import { getGenresFromIdModal } from './getGenresFromId';
import { getDataFromLocalStorage } from './local-storage-info';
import { DATA_STORAGE } from './genres';
import svg from '../images/icons.svg';
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
  removeDataFromLocalStorage,
} from './local-storage-info';
import { saveMovieToLibrary } from './modalBtnsAction';

export { onRenderModal };

const filmsData = 'films-data';
const watched = 'watched';
const queue = 'queue';

const genresData = getDataFromLocalStorage(DATA_STORAGE);
const modalCont = document.querySelector('.modal-film-main');

function onRenderModal(e) {
  const filmData = getDataFromLocalStorage(filmsData);
  const filmsWatched = getDataFromLocalStorage(watched);
  const filmsQueue = getDataFromLocalStorage(queue);
  const films = [...filmData, ...filmsWatched, ...filmsQueue];
  const currentFilmCard = e.target.closest('li');
  const filmId = currentFilmCard.getAttribute('id');
  const neededFilmArr = films.filter(film => film.id === Number(filmId));
  const neededFilm = neededFilmArr[0];

  removeDataFromLocalStorage('currentMovie');
  saveDataToLocalStorage('currentMovie', neededFilm);
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
       <button class="trailer-btn" data-id="${id}">
        <i class="ri-play-circle-line"></i>
      </button>
    </div>

    <div class="film-commercial">
      <h2 class="modal-main-title">${title}</h2>
      <table class="shot-inform-film">
        <tbody class="level-intarest">
          <tr class="tr">
            <td class="level-intarest__name">Vote / Votes</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">
              <span class="reting-level">${vote_average.toFixed(
                1
              )}</span> / ${vote_count}
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
        <button class="addWatchmBtm" type="button" data-action="add">add to watched</button>
        </li>
        <li>
          <button class="addQueueBtm" type="button" data-action="add">add to queue</button>
        </li>
      </ul>
    </div>
    <button type="button" class="modal-close">
    <svg class="svg-close" width="14" height="14">
      <use href="${svg}#close"></use>
    </svg>
  </button>`;

  modalCont.innerHTML = modalMarkup;
  saveMovieToLibrary(getDataFromLocalStorage('currentMovie'));
}
