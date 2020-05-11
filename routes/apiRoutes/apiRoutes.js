const router = require('express').Router();
const blogRoutes = require('./blogRoutes/blogRoutes');

router.use('/blogs', blogRoutes);

module.exports = router;
