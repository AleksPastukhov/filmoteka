import FilmsApiService from './films-service';
import getGenres from './genres';
import { renderFilmsToGallery } from './galleryFilmsMarkup';

const filmsApiService = new FilmsApiService();

const form = document.querySelector('.form__input');

form.addEventListener('submit', getFilmsOnSubmit);

function getFilmsOnSubmit(evt) {
  evt.preventDefault();

  const inputValue = evt.currentTarget.searchQuery.value;
  console.log(inputValue);

  filmsApiService
    .getFilms('search', inputValue)
    .then(films => {
      console.log(films.results);
      if (films.results.length === 0) {
        console.log('NO FILMS');
      }
      renderFilmsToGallery(films.results);
    })
    .catch(err => console.log(err))
    .finally(form.reset());
}
