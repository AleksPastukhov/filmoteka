export function getGenresNames(genreIds, genresInfo) {
  let genresNamesArray = [];

  for (const genreId of genreIds) {
    genresInfo.map(genreInfo => {
      if (genreInfo.id === genreId) {
        genresNamesArray.push(genreInfo.name);
      }
    });
  }

  if (genresNamesArray.length > 2) {
    return genresNamesArray.slice(0, 2).join(', ') + ', Other';
  }

  return genresNamesArray.join(', ');
}

export function getGenre(arr) {
  const genre = arr
    .map(genre => genre.name)
    .join(', ')
    .split(',');
  if (genre.length > 3) {
    return `${genre.slice(0, 1)}, Other`;
  } else {
    return genre;
  }
}
