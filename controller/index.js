const express = require('express');
const router = express.Router();

const movieRoutes = require('./movie-routes');
const actorRoutes = require('./actor-routes');
const categoryRoutes = require('./category-routes');

router.use('/movies', movieRoutes);
router.use('/actors', actorRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;