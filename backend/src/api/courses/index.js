
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {get} /courses/ getCourses
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

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {post} /courses/ postCourses
 * @apiDescription crée un cours
 * @apiName postCourses
 * @apiGroup Cours
 * @apiExample Example usage:
 *
 *     body:
 * {
 * "title" : "Android",
 * "promo" : [
 * {
 * "nomPromo" : "G3",
 * "membres" : [{
 *  "username" : "davzer"
 * },
 * {
 * "username" : "zizid"
 * }
 * ],
 * "responsable" : "TBH",
 *}
 *]
 *}
 *
 * @apiSuccess {Boolean} success API response
 * @apiSuccessExample {json} Success-Response:
 *{
 *  success : true
 *}

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing Fields
 */
router.post('/', controller.create);


module.exports = router;
