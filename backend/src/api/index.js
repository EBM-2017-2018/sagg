const { Router } = require('express');

const router = new Router();

router.use('/promos', require('./courses'));

module.exports = router;
