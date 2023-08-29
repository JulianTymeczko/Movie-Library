const router = require('express').Router();
const { Movie } = require('../../models'); // Update the model import to include Movie model

// The `/api/movies` endpoint

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll();
    res.status(200).json(movieData);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
});

// Get one movie by title
router.get('/:title', async (req, res) => {
  try {
    const movieData = await Movie.findOne({
      where: { title: req.params.title }
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with that title!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
});

// Create new movie
router.post('/', async (req, res) => {
  try {
    const movieData = await Movie.create(req.body);
    res.status(200).json(movieData);
  } catch (err) {
    console.error("Error:", err);
    res.status(400).json(err);
  }
});

// Update movie
router.put('/:id', async (req, res) => {
  try {
    const movieData = await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!movieData[0]) {
      res.status(404).json({ message: 'No movie found with that id!' });
      return;
    }
    res.status(200).json(movieData);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
});

// Delete movie
router.delete('/:id', async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: { id: req.params.id },
    });
    if (!movieData) {
      res.status(404).json({ message: 'No movie with this id!' });
      return;
    }
    res.status(200).json(movieData);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json(err);
  }
});

module.exports = router;