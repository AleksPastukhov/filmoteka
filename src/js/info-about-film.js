// FT-17 Після натискання на картку фільму на будь-якій сторінці повинна відкриватися модалка з динамічно підставленою інформацією про фільм
// FT-24 Реалізувати показ трейлеру фільма (мобілка, планшет, десктоп).
// Посилання на документацію для запиту повної інформації про кінофільм для сторінки кінофільму: https://developers.themoviedb.org/3/movies/get-movie-details
// Посилання на документацію для запиту повної інформації про можливий трейлер на YouTube: https://developers.themoviedb.org/3/movies/get-movie-videos


// import axios from 'axios';

// async function getTrendsFilmsAPI(page = 1, type = 'trends', movieId = 758009) {
//   const BASE_URL = 'https://api.themoviedb.org/3/';
//   const TOKEN =
//     'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTVjMzkyOGJmMjMzNTdlOGE2NzA0NTk3M2M5NTE3OCIsInN1YiI6IjYzZDY0NDY4MjBlNmE1MDBkNTQzZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lD-Jn8MCWel133C-zeEATaTZg8SazetodXbbh1gi0C8';
//   const typeRequest = {
//     search: 'search/movie',
//     video: movie/${movieId}/videos,
//     trends: 'trending/movie/week',
//     movieData: ${movieId},
//   };
//   const options = {
//     params: {
//       page,
//       query: 'a',
//       language: 'en-US',
//       include_adult: false,
//     },
//     headers: {
//       Authorization: Bearer ${TOKEN},
//       'Content-Type': 'application/json',
//     },
//   };

//   const respons = await axios.get(${BASE_URL}${typeRequest[type]}, options);
//   return respons.data;
// }

// getTrendsFilmsAPI()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));