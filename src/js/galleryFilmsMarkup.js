import { genresInfo } from './genres-info';
import { getGenresNames } from './getGenreNames';
import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
import { getDataFromLocalStorage } from './local-storage-info';
import { DATA_STORAGE } from './genres';
import { getGenresFromId } from './getGenresFromId';

const genresData = getDataFromLocalStorage(DATA_STORAGE);
console.log(genresData);

const list = document.querySelector('.cards__list');

export function renderFilmsToGallery(filmsArray) {
  const markup = filmsArray
    .map(
      ({
        poster_path,
        title,
        genre_ids: genreIds,
        id,
        release_date,
        vote_average,
      }) => {
        const basePosterURL = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return `<li class="library__item">
  <a class="library__link" href="">
    <div class="library__thumb">
      <img class="img library__image" 
src="${poster_path ? basePosterURL : ComingSoonImg}"  alt="${title}" />
    </div>
    <h2 class="library__movie">${title}</h2>
    <ul class="library__info">
      <li class="library__description">
        <p class="library__genres">${
          genreIds.length === 0
            ? 'No genre'
            : getGenresFromId(genreIds, genresData)
        } |</p>
      </li>
      <li class="library__description">
        <p class="library__year">${
          release_date === '' || !release_date
            ? 'No date'
            : release_date.slice(0, 4)
        }</p>
      </li>
      <li class="library__description">
        <p class="library__rating">${vote_average.toFixed(1)}</p>
      </li>
    </ul>
  </a>
</li>`;
      }
    )

    .join('');

  list.innerHTML = markup;
}
