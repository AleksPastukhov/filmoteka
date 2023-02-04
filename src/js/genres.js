import FilmsApiService from './films-service';

const filmsApiService = new FilmsApiService();

export default function getGenres() {
  return filmsApiService.getFilms('genre').then(result => {
    // console.log(result.genres);
    const genreById = result.genres.map(genre => {
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
    console.log(allGenres);
    return allGenres;
  });
}
