const router = require('express').Router();
const blogRoutes = require('./blogRoutes/blogRoutes');

// /api prepended to everyRoute inside of here
router.use('/blogs', blogRoutes);

module.exports = router;
