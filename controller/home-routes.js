const router = require('express').Router();

router.get('/', async (req, res) => {
 
  res.render('index');
});
router.get('/signup', async (req, res) => {
 
  res.render('signup');
});
router.get('/login', async (req, res) => {
 
  res.render('login');
});
router.get('/favourites', async (req, res) => {
 
  res.render('favourites');
});
router.get('/contact', async (req, res) => {
 
  res.render('contact');
});
router.get('/aboutus', async (req, res) => {
 
  res.render('aboutus');
});


module.exports = router;