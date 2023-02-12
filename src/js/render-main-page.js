import Pagination from 'tui-pagination';
import FilmsApiService from './films-service';
import { renderFilmsToGallery } from './galleryFilmsMarkup';
import { saveGenresToLocalStorage } from './genres';
import { Spinner } from './loader';
import { saveDataToLocalStorage } from './local-storage-info';

const FILMS_DATA = 'films-data';

const spinner = new Spinner('.spinner');

const paginationContainer = document.querySelector('#pagination');
const filmsApiService = new FilmsApiService();
const list = document.querySelector('.cards__list');

saveGenresToLocalStorage();

async function onFirstLoad() {
  await filmsApiService
    .getFilms('trends')
    .then(data => {
      if (!data.results) {
        return;
      }
      saveDataToLocalStorage(FILMS_DATA, data.results);

      list.innerHTML = renderFilmsToGallery(data.results);

      const pagination = new Pagination(paginationContainer, {
        totalItems: `${data.total_results}`,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true,
      });

      pagination.reset(data.total_results);
      pagination.on('beforeMove', e => {
        spinner.addSpinner();

        let page = e.page;
        filmsApiService.getFilms('trends', page).then(data => {
          if (!data.results) {
            return;
          }
          saveDataToLocalStorage(FILMS_DATA, data.results);

          list.innerHTML = renderFilmsToGallery(data.results);

          window.scrollTo({
            behavior: 'smooth',
            top: 0,
          });
          spinner.removeSpinner();
        });
      });
    })
    .catch(err => console.log(err))
    .finally();
}

setTimeout(() => {
  onFirstLoad();
}, 0);
