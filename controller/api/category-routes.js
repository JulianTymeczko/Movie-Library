const router = require('express').Router();
const { Category, Movie } = require('../../models'); // Update the model import to use Movie instead of Product

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all categories with their associated Movies
    const categoryData = await Category.findAll({
      include: [
        { model: Movie } // Update to use Movie model
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

router.get('/:id', async (req, res) => {
  try {
    // Find one category by its `id` value and its associated Movies
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{
        model: Movie // Update to use Movie model
      }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // Create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;