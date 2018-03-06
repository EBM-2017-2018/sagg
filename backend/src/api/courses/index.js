
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');

router.get('/', controller.findAll);

router.post('/', controller.create);


module.exports = router;
