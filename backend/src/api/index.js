const { Router } = require('express');

const router = new Router();

router.use('/courses', require('./courses'));
router.use('/attendances', require('./attendances'));

module.exports = router;
