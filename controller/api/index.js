const router = require('express').Router();
const movieRoutes = require('./movie-routes'); // Update to use movie-routes
const actorRoutes = require('./actor-routes'); // Add actor-routes
// const characterRoutes = require('./character-routes'); // Add character-routes
const categoryRoutes = require('./category-routes');

// All of these routes are prefixed with '/api'
router.use('/movies', movieRoutes); // Update to use movieRoutes
router.use('/actors', actorRoutes); // Add actorRoutes
// router.use('/characters', characterRoutes); // Add characterRoutes
router.use('/categories', categoryRoutes);

module.exports = router;
