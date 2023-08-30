const { Movie } = require('../models');

const router = require('express').Router();
/*
router.get('/', async (req, res) => {

// const movies = await Movie.findAll();

// const data = movies.map(movie => movie.get({plain: true}))
const data = [{
    title: "IT",
    image: "/images/carrie.jpg"
  },
  {
    title: "Carrie",
    image: "/images/carrie.jpg"
  }]
  res.render('index', {data});
   
});
*/

router.get('/', async (req, res) => {
  // TODO: double check if this is correct.
  const result = await Movie.findAll();
  const movies = result.map(x => x.get({plain: true}));
  res.render('index', {movies});
})

router.get('/signup', async (req, res) => {
  
  res.render('signup');
});

router.get('/login', async (req, res) => {
  
  res.render('Login');
});

router.get('/contact', async (req, res) => {
  
  res.render('contact');
});
router.get('/aboutus', async (req, res) => {
  
  res.render('aboutus');
});

router.get('/movies', async(req, res) => {
  // we 
  const result = await Movie.findAll();
  const movies = result.map(x => x.get({plain: true}));
  res.render('movies', {movies});
})




module.exports = router;

