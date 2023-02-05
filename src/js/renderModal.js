import { FILMS_DATA } from './render-main-page';
import { getDataFromLocalStorage } from './local-storage-info';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
import { getGenresFromId } from './getGenresFromId';
import { getDataFromLocalStorage } from './local-storage-info';
import { DATA_STORAGE } from './genres';

export { onRenderModal };

const genresData = getDataFromLocalStorage(DATA_STORAGE);

const refs = {
  filmGalaryContainer: document.querySelector('.home'),
  closeModalBtn: document.querySelector('.modal-close'),
  modal: document.querySelector('.backdrop'),
};

const cardList = document.querySelector('.cards__list');
const modalCont = document.querySelector('.modal-film-main');

cardList.addEventListener('click', onRenderModal);

function onRenderModal(e) {
  e.preventDefault();
  const films = getDataFromLocalStorage(FILMS_DATA);
  console.log(films);

  refs.modal.classList.remove('visually-hidden');

  const currentFilmCard = e.target.closest('li');

  const filmId = currentFilmCard.getAttribute('id');

  console.log(filmId);

  const neededFilmArr = films.filter(film => film.id === Number(filmId));
  const neededFilm = neededFilmArr[0];
  console.log(neededFilm);

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

  //   modalCont.setAttribute('id', id);

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
                : getGenresFromId(genreIds, genresData)
            }</td>
          </tr>
        </tbody>
      </table>
      <p class="comment-title">About</p>
      <p class="about-film">
       ${overview}
      </p>
      <ul class="modal-Btm">
        <li>
          <button class="addWatchmBtm" type="button">add to Watched</button>
        </li>
        <li>
          <button class="addQueueBtm" type="button">add to queue</button>
        </li>
      </ul>
    </div>`;

  modalCont.innerHTML = modalMarkup;
}

{
  /* <div class="modal-film-main container">
    <div class="img-posters">
      <img class="img-film container" src="#" alt="#" />
      <button class="trailer-btn" data-id="500">
        <svg class="trailer-icon" width="80" height="80">
          <use href="./images/icons.svg#trailer-btn"></use>
        </svg>
      </button>
    </div>

    <div class="film-commercial">
      <h2 class="modal-main-title">A FISTFUL OF LEAD</h2>
      <table class="shot-inform-film">
        <tbody class="level-intarest">
          <tr class="tr">
            <td class="level-intarest__name">Vote / Votes</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">
              <span class="reting-level">7.3</span> / 1260
            </td>
          </tr>

          <tr class="tr">
            <td class="level-intarest__name">Popularity</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">100.2</td>
          </tr>
          <tr class="tr">
            <td class="level-intarest__name">Original Title</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">A FISTFUL OF LEAD</td>
          </tr>
          <tr class="tr">
            <td class="level-intarest__name">Genre</td>
            <td class="midl-table"></td>
            <td class="level-intarest__value">Western</td>
          </tr>
        </tbody>
      </table>
      <p class="comment-title">About</p>
      <p class="about-film">
        Four of the West’s most infamous outlaws assemble to steal a huge stash
        of gold from the most corrupt settlement of the gold rush towns. But not
        all goes to plan one is killed and the other three escapes with bags of
        gold hide out in the abandoned gold mine where they happen across
        another gang of three – who themselves were planning to hit the very
        same bank! As tensions rise, things go from bad to worse as they realise
        the bags of gold are filled with lead... they’ve been double crossed –
        but by who and how?
      </p>
      <ul class="modal-Btm">
        <li>
          <button class="addWatchmBtm" type="submit">add to Watched</button>
        </li>
        <li>
          <button class="addQueueBtm" type="submit">add to queue</button>
        </li>
      </ul>
    </div>
    </div> */
}
