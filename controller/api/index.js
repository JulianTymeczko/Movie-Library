const router = require('express').Router();
const movieRoutes = require('./movie-routes'); // Update to use movie-routes
// const actorRoutes = require('./actor-routes'); // Add actor-routes
// const characterRoutes = require('./character-routes'); // Add character-routes
<<<<<<< HEAD
const categoryRoutes = require('./category-routes');
const userRoutes = require('./user-routes');
=======
// const categoryRoutes = require('./category-routes');

>>>>>>> 218de475179cfea3f1e508148d28a0d92aace4ed
// All of these routes are prefixed with '/api'
router.use('/movies', movieRoutes); // Update to use movieRoutes
// router.use('/actors', actorRoutes); // Add actorRoutes
// router.use('/characters', characterRoutes); // Add characterRoutes
<<<<<<< HEAD
router.use('/categories', categoryRoutes);
router.use('/users', userRoutes);
=======
// router.use('/categories', categoryRoutes);

>>>>>>> 218de475179cfea3f1e508148d28a0d92aace4ed
module.exports = router;