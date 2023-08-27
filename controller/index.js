const express = require('express');
const router = express.Router();

const movieRoutes = require('./api/movie-routes');
const apiRoutes = require('./api/index');
const categoryRoutes = require('./api/category-routes');
const homeRoutes = require('./home-routes')
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;