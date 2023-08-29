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
  const movies = result.map(x => x.get({plaine: true}));
  res.render('index', {movies });
})

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      // Assuming you have fields like email and password in your User model
      email: req.body.email,
      password: req.body.password,
      // Add other fields as needed
    });

    req.session.loggedIn = true;
    // You can set more session properties if needed

    return res.status(200).json({ message: 'Signup successful.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    req.session.loggedIn = true; // Set the loggedIn property in the session
    // You can set more session properties if needed

    return res.status(200).json({ message: 'Login successful.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred.' });
  }
});

module.exports = router;

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

