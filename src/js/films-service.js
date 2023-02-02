import axios from 'axios';

export default class FilmsApiService {
  #BASE_URL = 'https://api.themoviedb.org/3/';

  #TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8';

  #KEY = 'e95c3928bf23357e8a67045973c95178';

  #typeRequest = {
    search: 'search/movie',
    trends: 'trending/movie/week',
    movieData: '',
    video: '',
  };

  constructor() {
    this.page = 1;
  }

  getUrl(type) {
    return `${this.#BASE_URL}${this.#typeRequest[type]}?api_key=${this.#KEY}`;
    // return `${this.#BASE_URL}${this.type}?api_key=${this.#KEY}&page=${
    //   this.page
    // }`;
  }

  async getFilms(type, query) {
    try {
      const options = {
        params: {
          page: this.page,
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

// Існує 3 типу запитів: trends, search і video.

// у класа filmServise є 2 методи: getFilms(type, query) та getFilmById(type, movieId)

//У параметру type пишемо один з типів запитів (trends, search, video відповідно, що вам треба фетчнути).

// Якщо нам треба тільки трендові фільми, то використовуємо getFilms(type, query), де type буде строка 'trends', другий параметр не обов'язковий.

// Якщо потрібні фільми за ключовим словом, то getFilms(type, query), де type це строка 'search', а query це те що буде вводитись в інпуті.

// getFilmById(type, movieId) щоб получити key до трейлеру.

// async function lordOfTheRingsAPI(page = 1, type = 'trends', movieId = 758009) {
//   const BASE_URL = 'https://api.themoviedb.org/3/';
//   const TOKEN =
//     'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8';
//   const typeRequest = {
//     search: 'search/movie',
//     video: `movie/${movieId}/videos`,
//     trends: 'trending/movie/week',
//     movieData: `${movieId}`,
//   };
//   const options = {
//     params: {
//       page,
//       query: 'a',
//       language: 'en-US',
//       include_adult: false,
//     },
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//   };
//
//
//
//
//
//
//   const respons = await axios.get(`${BASE_URL}${typeRequest[type]}`, options);
//   return respons.data;
// }

// lordOfTheRingsAPI()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// const axios = require('axios').default;

//
// API ключ (v3 auth): 'e95c3928bf23357e8a67045973c95178'
// Токен доступу для читання API (v4 auth): 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8'

//
//  Створити клас для взаємодії з API "FilmsApiService"
// клас має такі приватні параметри:
// - BASE_URL = 'https://api.themoviedb.org/3/';
// - TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8'; або KEY = 'e95c3928bf23357e8a67045973c95178'
// - typeRequest = {
//     search: 'search/movie',
//     video: `movie/${movieId}/videos`,
//     trends: 'trending/movie/week',
//     movieData: `${movieId}`,
//   };
//
//
// в конструкторі класу є такі параметри:
// - сторінка 'page', (номер сторінки запиту)
// - запит 'userRequest' , (пошуковий запит від клієнта)
// - тип запиту 'type' (search, video, trends, movieData)

// Даний клас повинен містити такі методи:
// - створення адреси запиту.
// - get запит на бекенд (використовуємо axios) приймає typeRequest (передає у метод створення запиту),  з наступними опціями.
// - options = {
//     params: {
//       page,
//       query: '',
//       language: 'en-US',
//       include_adult: false,
//     },
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//   };
//
// - геттер для userRequest
// - сеттер для userRequest
// - геттер для typeRequest
// - сеттер для typeRequest
