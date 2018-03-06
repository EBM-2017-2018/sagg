
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {get} /api/courses/ getUserRole
 * @apiDescription récupère la liste de tous les cours
 * @apiName getCourses
 * @apiGroup Cours
 * @apiSuccess {courses[]} courses liste des cours
 * @apiSuccessExample {json} Success-Response:
 *{
 *  [
 *      {
 *          "promo": [
 *                      {
 *                         "nomPromo" : "G3",
 *                         "membres" : [{
 *                                      "username" : "davzer"
 *                                      }],
 *                          "responsable" : "TBH"
 *                      }
 *                  ],
 *          "_id": "5a9ea41a4e7d37b1400c7b7e",
 *          "title": "Développement Android",
 *      }
 *  ]
 *}

 *
 * @apiError (500) Mongoose Error
 */
router.get('/', controller.findAll);

router.post('/', controller.create);


module.exports = router;
