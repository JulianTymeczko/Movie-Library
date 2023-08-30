const { Movie } = require('../models'); // Make sure to use the correct model name

const movieData = [
  {
    title: 'Shawshank Redemption',
    year_of_release: 1994, // Add the year of release
    image: '/images/shawshank_redemption.jpg'
  },
  {
    title: 'The Shining',
    year_of_release: 1980,
    image: '/images/shining.jpg'
  },
  {
    title: 'Carrie',
    year_of_release: 1976,
    image: '/images/carrie.jpg'
  },
  {
    title: 'It',
    year_of_release: 2017,
    image: '/images/it.jpg'
  },
  {
    title: 'Stand by Me',
    year_of_release: 1986,
    image: '/images/standbyme.jpg'
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;