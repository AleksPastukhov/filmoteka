import axios from 'axios';

export default class FilmsApiService {
  #BASE_URL = 'https://api.themoviedb.org/3/';

  #KEY = 'e95c3928bf23357e8a67045973c95178';

  #typeRequest = {
    search: 'search/movie',
    trends: 'trending/movie/week',
    movieData: '',
    video: '',
    genre: 'genre/movie/list',
  };

  constructor() {
    this.page = 1;
  }

  getUrl(type) {
    return `${this.#BASE_URL}${this.#typeRequest[type]}?api_key=${this.#KEY}`;
  }

  async getFilms(type, page = 1, query) {
    try {
      const options = {
        params: {
          page: page,
          query: query,
          language: 'en-US',
          include_adult: false,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(this.getUrl(type), options);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getFilmById(type, movieId) {
    try {
      this.filmId = movieId;
      this.movieDataById = movieId;

      const options = {
        params: {
          page: this.page,
          language: 'en-US',
          include_adult: false,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.get(this.getUrl(type), options);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  get userReq() {
    return this.userRequest;
  }

  set userReq(newUserReq) {
    return (this.userRequest = newUserReq);
  }

  get typeReq() {
    return this.type;
  }

  set typeReq(newTypeReq) {
    return (this.type = newTypeReq);
  }

  get movieDataById() {
    return this.#typeRequest.movieData;
  }

  set movieDataById(newId) {
    return (this.#typeRequest.movieData = `${newId}`);
  }

  get filmId() {
    return this.#typeRequest.video;
  }

  set filmId(newId) {
    return (this.#typeRequest.video = `movie/${newId}/videos`);
  }
}
