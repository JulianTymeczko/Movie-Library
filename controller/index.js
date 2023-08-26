const express = require('express');
const router = express.Router();

const movieRoutes = require('./api/movie-routes');
const actorRoutes = require('./api/actor-routes');
const categoryRoutes = require('./api/category-routes');

router.use('./movies', movieRoutes);
router.use('./actors', actorRoutes);
router.use('./categories', categoryRoutes);

module.exports = router;