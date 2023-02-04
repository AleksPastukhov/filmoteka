import { renderFilmsGallery } from './galleryMarkup';
import FilmsApiService from './films-service';
import Pagination from 'tui-pagination';

const apiService = new FilmsApiService();

const paginationContainer = document.querySelector('#pagination');

const paginationOptions = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
};

export async function getPaginationFromMainRequest() {
  await apiService.getFilms('trends', (page = 1)).then(data => {
    paginationOptions.totalItems = data.total_results;
    paginationOptions.itemsPerPage = data.results.length;
    paginationOptions.totalPages = data.total_pages;

    if (data.total_pages <= 1) {
      refs.pagination.classList.add('visually-hidden');
    } else refs.pagination.classList.remove('visually-hidden');
  });

  const pagination = new Pagination(paginationContainer, paginationOptions);

  let lastPage = document.querySelector('.tui-ico-last');
  lastPage.textContent = paginationOptions.totalPages;

  function renderFilmGallery(films, genres) {
    refs.filmGallery.innerHTML = '';
    refs.filmGallery.insertAdjacentHTML('beforeend', filmTpl(films, genres));
    document.querySelector('.spinner').style.display = 'none';
    document
      .querySelectorAll('.film__item')
      .forEach(node => node.addEventListener('click', onMovieCardClick));
  }

  async function loadTrendMain(page) {
    const genres = await combineGenres();
    const filmsTrending = await apiService.fetchFilmsTrending(page);
    renderFilmGallery(filmsTrending, genres);
  }

  loadTrendMain(1);

  pagination.on('afterMove', e => {
    const firstPage = document.querySelector('.tui-ico-first');
    firstPage.textContent = '';
    loadTrendMain(e.page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (e.page >= 4) {
      firstPage.textContent = 1;
    }
  });
}
