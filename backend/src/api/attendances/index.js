const { Router } = require('express');

const router = new Router();

const controller = require('./attendances.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.put('/:id/user/:uid', controller.warnIsHere);

module.exports = router;
