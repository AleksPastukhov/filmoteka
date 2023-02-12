import FilmsApiService from './films-service';
import { renderFilmsToGallery } from './galleryFilmsMarkup';
import Pagination from 'tui-pagination';
import { Spinner } from './loader';
import { saveDataToLocalStorage } from './local-storage-info';

const FILMS_DATA = 'films-data';

const spinner = new Spinner('.spinner');

const paginationContainer = document.querySelector('#pagination');
const list = document.querySelector('.cards__list');

const filmsApiService = new FilmsApiService();

const form = document.querySelector('.form__input');
const headerNotification = document.querySelector('.search__error-text');

form.addEventListener('submit', getFilmsOnSubmit);

function getFilmsOnSubmit(evt) {
  evt.preventDefault();

  let page = 1;
  const inputValue = evt.currentTarget.searchQuery.value;
  spinner.addSpinner();

  if (!inputValue) {
    headerNotification.classList.remove('visually-hidden');
    setTimeout(() => {
      headerNotification.classList.add('visually-hidden');
    }, 4500);
    spinner.removeSpinner();
    return;
  }

  filmsApiService
    .getFilms('search', page, inputValue)
    .then(films => {
      if (films.results.length === 0) {
        headerNotification.classList.remove('visually-hidden');

        setTimeout(() => {
          headerNotification.classList.add('visually-hidden');
        }, 4500);
        spinner.removeSpinner();
        return;
      }
      saveDataToLocalStorage(FILMS_DATA, films.results);

      list.innerHTML = renderFilmsToGallery(films.results);
      spinner.removeSpinner();

      const pagination = new Pagination(paginationContainer, {
        totalItems: `${films.total_results}`,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true,
      });

      pagination.reset(films.total_results);
      pagination.on('beforeMove', e => {
        spinner.addSpinner();

        page = e.page;
        filmsApiService.getFilms('search', page, inputValue).then(films => {
          if (!films.results) {
            return;
          }

          renderFilmsToGallery(films.results);

          saveDataToLocalStorage(FILMS_DATA, films.results);

          window.scrollTo({
            behavior: 'smooth',
            top: 0,
          });

          spinner.removeSpinner();
        });
      });
    })
    .catch(err => console.log(err))
    .finally(form.reset());
}
