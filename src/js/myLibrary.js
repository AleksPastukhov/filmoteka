import { Spinner } from './loader.js';
import { getDataFromLocalStorage } from './local-storage-info';
import { onFilmCardClick } from './modal';
import Pagination from 'tui-pagination';

import ComingSoonImg from '../images/movie-poster-coming-soon.jpg';
import { getDataFromLocalStorage } from './local-storage-info';
import { DATA_STORAGE } from './genres';
import { getGenresFromId } from './getGenresFromId';

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
      const savedMovies = getDataFromLocalStorage('watched');
      activeBtn = 'watched';
      changeActiveBtn(refs.watchedBtn, refs.queueBtn);
      checkLocalStorage('watched');
      addPagination();
      if (savedMovies.length === 0) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.libraryName.textContent = 'watched';
      }
    }
    function onQueueBtnClick() {
      const savedMovies = getDataFromLocalStorage('queue');
      changeActiveBtn(refs.queueBtn, refs.watchedBtn);
      checkLocalStorage('queue');
      activeBtn = 'queue';
      addPagination();
      if (savedMovies.length === 0) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.libraryName.textContent = 'queue';
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
      if (!savedMovies) {
        refs.emptyLibrary.classList.remove('visually-hidden');
        refs.libraryList.classList.add('visually-hidden');
        return;
      }
      const genresData = getDataFromLocalStorage(DATA_STORAGE);
      refs.libraryList.innerHTML = savedMovies
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
            return `<li class="library__item" id="${id}">
        <a href="" class="library__link"><div class="library__thumb">
      <img class="library__image" 
src="${poster_path ? basePosterURL : ComingSoonImg}"  alt="${title}" />
    </div>
    <div class="library__paragraph">
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
    </div></a></li>`;
          }
        )
        .join('');
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
