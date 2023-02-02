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
//
//
//
//
// в конструкторі класу є такі параметри:
// - сторінка 'page', (номер сторінки запиту)
// - запит 'userRequest' , (пошуковий запит від клієнта)
// - тип запиту 'type' (search, video, trends, movieData)
//
//
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
//
//
// - геттер для userRequest
// - сеттер для userRequest
// - геттер для typeRequest
// - сеттер для typeRequest