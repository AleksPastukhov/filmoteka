import FilmsApiService from './films-service';
import { renderFilmsToGallery } from './galleryFilmsMarkup';

const filmsApiService = new FilmsApiService();

const form = document.querySelector('.form__input');
const headerNotification = document.querySelector('.search__error-text');

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
        headerNotification.classList.remove('visually-hidden');

        setTimeout(
          () => headerNotification.classList.add('visually-hidden'),
          4500
        );

        return;
      }
      renderFilmsToGallery(films.results);
    })
    .catch(err => console.log(err))
    .finally(form.reset());
}
