import FilmsApiService from './films-service';
import getGenres from './genres';

const filmsApiService = new FilmsApiService();

const form = document.querySelector('.form__input');
const list = document.querySelector('.cards__list');

form.addEventListener('submit', getFilmsOnSubmit);

getGenres()
  .then(result => console.log(result))
  .catch(err => console.log(err));

function getFilmsOnSubmit(evt) {
  evt.preventDefault();
  list.innerHTML = '';

  const inputValue = evt.currentTarget.searchQuery.value;
  console.log(inputValue);

  filmsApiService.getFilms('search', inputValue).then(films => {
    console.log(films.results);
    if (films.results.length === 0) {
      console.log('NO FILMS');
    } else {
      const markup = films.results
        .map(film => {
          const basePosterURL = `https://image.tmdb.org/t/p/w500${film.poster_path}`;

          return `<li class="library__item">
  <a class="library__link" href="">
    <div class="library__thumb">
      <img class="img library__image" src="${
        !film.poster_path ? 'NO POSTER' : basePosterURL
      }" alt="${film.title}" />
    </div>
    <h2 class="library__movie">${film.title}</h2>
    <ul class="library__info">
      <li class="library__description">
        <p class="library__genres">${
          film.genre_ids.length === 0
            ? 'NO GENRES'
            : Object.values(film.genre_ids).join(', ')
        }</p>
      </li>
      <li class="library__description">
        <p class="library__year">${
          film.release_date === '' || !film.release_date
            ? 'NO DATE'
            : film.release_date.slice(0, 4)
        }</p>
      </li>
      <li class="library__description">
        <p class="library__rating">${film.vote_average}</p>
      </li>
    </ul>
  </a>
</li>`;
        })

        .join('');

      return (list.innerHTML = markup);
    }
  });
}
