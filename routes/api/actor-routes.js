const router = require('express').Router();
const { Actor, Character } = require('../../models'); // Update the model import to use Actor and Character models

// The `/api/actors` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all actors with their associated Characters
    const actorData = await Actor.findAll({
      include: [
        { model: Character }
      ],
    });
    res.status(200).json(actorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find a single actor by its `id` value and its associated Characters
    const actorData = await Actor.findByPk(req.params.id, {
      include: [
        { model: Character }
      ],
    });

    if (!actorData) {
      res.status(404).json({ message: 'No actor found with that id!' });
      return;
    }

    res.status(200).json(actorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const actorData = await Actor.create(req.body);
    res.status(200).json(actorData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const actorData = await Actor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!actorData[0]) {
      res.status(404).json({ message: 'No actor found with that id!' });
      return;
    }
    res.status(200).json(actorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const actorData = await Actor.destroy({
      where: { id: req.params.id },
    });
    if (!actorData) {
      res.status(404).json({ message: 'No actor with this id!' });
      return;
    }
    res.status(200).json('Actor has been deleted..!!');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;