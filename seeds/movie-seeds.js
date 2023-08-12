const { Movie } = require('../models'); // Make sure to use the correct model name

const movieData = [
  {
    movie_title: 'Shawshank Redemption',
    year_of_release: 1994, // Add the year of release
  },
  {
    movie_title: 'The Shining',
    year_of_release: 1980,
  },
  {
    movie_title: 'Carrie',
    year_of_release: 1976,
  },
  {
    movie_title: 'It',
    year_of_release: 2017,
  },
  {
    movie_title: 'Stand by Me',
    year_of_release: 1986,
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;