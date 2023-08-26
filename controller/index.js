const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./home-routes')

router.use('/api', apiRoutes);


router.get('/', viewRoutes);

/*
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
*/

module.exports = router;