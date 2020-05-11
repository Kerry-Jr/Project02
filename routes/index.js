const router = require('express').Router();
const apiRoutes = require('./apiRoutes/apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;
