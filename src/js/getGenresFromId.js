const getGenresFromId = (genresIds, genresData) => {
  const genres = genresIds.map(id => genresData[id]);
  return genres.length > 2
    ? `${genres[0]}, ${genres[1]}, others`
    : genres.join(', ');
};

export { getGenresFromId };
