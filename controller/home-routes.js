const { Movie } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
const movies = await Movie.findAll();
const data = movies.map(movie => movie.get({plain: true}))
  res.render('index', {data, actors});
});
router.get('/signup', async (req, res) => {
 
  res.render('signup');
});
router.get('/login', async (req, res) => {
 
  res.render('login');
});

router.get('/contact', async (req, res) => {
 
  res.render('contact');
});
router.get('/aboutus', async (req, res) => {
 
  res.render('aboutus');
});


module.exports = router;