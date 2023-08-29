const { Movie } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const result = await Movie.findAll();
  const movies = result.map(x => x.get({ plain: true }));
  res.render('index', { movies });
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.post('/login', async (req, res) => {
  try {
    // ... your login code ...
    return res.status(200).json({ message: 'Login successful.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred.' });
  }
});

router.get('/contact', async (req, res) => {
  res.render('contact');
});

router.get('/aboutus', async (req, res) => {
  res.render('aboutus');
});

router.get('/movies', (req, res) => {
  res.render('landing');
});

module.exports = router;