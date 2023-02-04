// FT-07 Реалізувати підвантаження популярних фільмів на головну (першу) сторінку

// Посилання на документацію для запиту на список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці: https://developers.themoviedb.org/3/trending/get-trending
//
// Посилання на документацію для запиту фільму за ключовим словом на головній сторінці: https://developers.themoviedb.org/3/search/search-movies

// - використовуючи клас FilmsApiService здійснюємо запит на бекенд в параметрах запиту передаємо typeRequest

// - створюємо розмітку для головної сторінки
// - рендеримо розмітку в контейнер (container-home) головної cторінки
import Pagination from 'tui-pagination';
import FilmsApiService from './films-service';
import { renderFilmsToGallery } from './galleryFilmsMarkup';
import { saveGenresToLocalStorage } from './genres';

const paginationContainer = document.querySelector('#pagination');
const filmsApiService = new FilmsApiService();

saveGenresToLocalStorage();

async function onFirstLoad() {
  await filmsApiService
    .getFilms('trends')
    .then(data => {
      if (!data.results) {
        return;
      }

      renderFilmsToGallery(data.results);

      const pagination = new Pagination(paginationContainer, {
        totalItems: `${data.total_results}`,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true,
      });

      pagination.reset(data.total_results);
      pagination.on('beforeMove', e => {
        page = e.page;
        filmsApiService.getFilms('trends', page).then(data => {
          if (!data.results) {
            return;
          }

          renderFilmsToGallery(data.results);

          setTimeout(() => {
            window.scrollTo({
              behavior: 'smooth',
              top: 250,
            });
          }, 300);
        });
      });
    })
    .catch(err => console.log(err));
}

onFirstLoad();
