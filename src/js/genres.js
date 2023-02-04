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
        // console.log(genreArr);
        const genreId = genreArr[0];
        // console.log(genreId);
        let genreObj = {
          [genreId]: genreArr[1],
        };
        return genreObj;
      });
      // console.log(genreById);
      const allGenres = Object.assign({}, ...genreById);
      // console.log(allGenres);
      saveDataToLocalStorage(DATA_STORAGE, allGenres);
    });
}
