const router = require('express').Router();
const todoRoutes = require('./todoRoutes/todoRoutes');

// /api prepended to everyRoute inside of here
router.use('/todos', todoRoutes);

module.exports = router;
