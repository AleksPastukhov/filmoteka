// import * as myModule from './js';
import FilmsApiService from './js/films-service';

const filmServise = new FilmsApiService();

console.log(filmServise.getUrl('trends'));
// console.log(filmServise.getFilms('search'));

async function getFilmForUser(type, qv) {
  return await filmServise.getFilms(type, qv);
}

getFilmForUser('trends', 'dfg')
  .then(data => console.log(data))
  .catch(err => console.log(err));
