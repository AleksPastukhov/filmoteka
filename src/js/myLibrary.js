import { Spinner } from './loader.js';
import { getDataFromLocalStorage } from './local-storage-info';
import { onFilmCardClick } from './modal';
import Pagination from 'tui-pagination';
import { renderFilmsToGallery } from './galleryFilmsMarkup';
import { getDataFromLocalStorage } from './local-storage-info';

const refs = {
  watchedBtn: document.querySelector('button.watched'),
  queueBtn: document.querySelector('button.queue'),
  libraryContainer: document.querySelector('.library__container'),
  libraryList: document.querySelector('.library__list'),
  emptyLibrary: document.querySelector('.empty-library'),
  libraryName: document.querySelector('span.library-name'),
  libraryCard: document.querySelector('.library__item'),
  activeBtn: document.querySelector('button.is-active'),
  paginationContainer: document.querySelector('#pagination'),
};

const spinner = new Spinner('.spinner');

let activeBtn = 'watched';

export function libraryHandler() {
  if (refs.libraryContainer) {
    if (refs.watchedBtn) {
      refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
      refs.queueBtn.addEventListener('click', onQueueBtnClick);
    }
    if (activeBtn === 'watched') {
      onWatchedBtnClick();
      checkLocalStorage('watched');
    }
    if (activeBtn === 'queue') {
      onQueueBtnClick();
      checkLocalStorage('queue');
    }
    function onWatchedBtnClick() {
      spinner.addSpinner();
      const savedMovies = getDataFromLocalStorage('watched');
      activeBtn = 'watched';
      changeActiveBtn(refs.watchedBtn, refs.queueBtn);
      checkLocalStorage('watched');
      addPagination();
      if (savedMovies.length === 0) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.libraryName.textContent = 'watched';
        spinner.removeSpinner();
      }
    }
    function onQueueBtnClick() {
      spinner.addSpinner();
      const savedMovies = getDataFromLocalStorage('queue');
      changeActiveBtn(refs.queueBtn, refs.watchedBtn);
      checkLocalStorage('queue');
      activeBtn = 'queue';
      addPagination();
      if (savedMovies.length === 0) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.libraryName.textContent = 'queue';
        spinner.removeSpinner();
      }
    }
    function changeActiveBtn(btn1, btn2) {
      btn1.classList.add('is-active');
      btn2.classList.remove('is-active');
    }
    function checkLocalStorage(library) {
      const savedMovies = getDataFromLocalStorage(library);
      if (savedMovies) {
        refs.emptyLibrary.classList.add('visually-hidden');
        refs.paginationContainer.classList.remove('visually-hidden');
        refs.libraryList.classList.remove('visually-hidden');
      }
      if (savedMovies.length === 0) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.paginationContainer.classList.add('visually-hidden');
        refs.libraryList.classList.add('visually-hidden');
      }
    }
    function renderSavedMovies(savedMovies) {
      spinner.addSpinner();
      if (!savedMovies) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.libraryList.classList.add('visually-hidden');
        return;
      }
      refs.libraryList.innerHTML = renderFilmsToGallery(savedMovies);
      spinner.removeSpinner();
    }

    refs.libraryContainer.addEventListener('click', onFilmCardClick);

    function addPagination() {
      const savedMovies = getDataFromLocalStorage(activeBtn);
      if (!savedMovies) {
        return;
      }
      let totalResults = savedMovies.length;
      let opts = {
        totalItems: `${totalResults}`,
        itemsPerPage: 12,
        visiblePages: 5,
        centerAlign: true,
        currentPage: 1,
      };

      function chunkArray(array, itemsPerPage) {
        const chunkedArray = [];
        let index = 0;
        while (index < array.length) {
          const item = array.slice(index, itemsPerPage + index);
          chunkedArray.push(item);
          index += itemsPerPage;
        }
        return chunkedArray;
      }

      const chunkedSavedMovies = chunkArray(savedMovies, opts.itemsPerPage);
      let moviesForCurrentPage = chunkedSavedMovies[opts.currentPage - 1];

      renderSavedMovies(moviesForCurrentPage);

      const pagination = new Pagination(refs.paginationContainer, opts);

      pagination.reset(totalResults);

      pagination.on('beforeMove', e => {
        opts.currentPage = e.page;
        moviesForCurrentPage = chunkedSavedMovies[opts.currentPage - 1];
        renderSavedMovies(moviesForCurrentPage);

        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        });
      });

      pagination.reset(totalResults);
    }
  }
}

libraryHandler();
