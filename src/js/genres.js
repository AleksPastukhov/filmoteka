import FilmsApiService from './films-service';
import { saveDataToLocalStorage } from './local-storage-info';

const filmsApiService = new FilmsApiService();

export const DATA_STORAGE = 'genresObj';

export function saveGenresToLocalStorage() {
  return filmsApiService
    .getFilms('genre')
    .then(result => result.genres)
    .then(result => {
      const genreById = result.map(genre => {
        const genreArr = Object.values(genre);

        const genreId = genreArr[0];

        let genreObj = {
          [genreId]: genreArr[1],
        };
        return genreObj;
      });

      const allGenres = Object.assign({}, ...genreById);

      saveDataToLocalStorage(DATA_STORAGE, allGenres);
    });
}
