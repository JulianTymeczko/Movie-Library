const { Movie } = require('../models'); // Make sure to use the correct model name

const movieData = [
  {
    movie_title: 'Shawshank Redemption',
    year_of_release: 1994, // Add the year of release
    image: '/images/shawshank_redemption.jpg'
  },
  {
    movie_title: 'The Shining',
    year_of_release: 1980,
    image: '/images/shining.jpg'
  },
  {
    movie_title: 'Carrie',
    year_of_release: 1976,
    image: '/images/carrie.jpg'
  },
  {
    movie_title: 'It',
    year_of_release: 2017,
    image: '/images/it.jpg'
  },
  {
    movie_title: 'Stand by Me',
    year_of_release: 1986,
    image: '/images/standbyme.jpg'
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;