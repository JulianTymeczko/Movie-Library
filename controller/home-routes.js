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

router.get('/', (req, res) => {
  res.render('landing');
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

router.get('/movies', (req, res) => {
  res.render('landing');
})




module.exports = router;

