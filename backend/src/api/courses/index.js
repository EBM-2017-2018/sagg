
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {get} /promos/:pid/courses getCourses
 * @apiDescription récupère la liste de tous les cours associés à une promo
 * @apiName getCourses
 * @apiParam {String} pid Id de la promo
 * @apiGroup Cours
 * @apiSuccess {courses[]} courses liste des cours
 * @apiSuccessExample {json} Success-Response:
 *{
 *  [
 *      {
 *          "promoId" : "5b9ea41a4e2d37b1400c7b7a",
 *          "title" : "Cours 1",
 *          "teacher" : "Thomas Bourdeau'huy",
 *          "start_time" : "2017-05-05T11:30:00Z",
 *          "end_time" : "2017-05-05T13:30:00Z"
 *          "attendees": [
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7a",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7v",
 *                      "ishere" : "false",
 *                      "comments" : ""
 *                   }
 *                  ],
 *          "_id": "5a9ea41a4e7d37b1400c7b7e",
 *      }
 *  ]
 *}

 *
 * @apiError (500) Mongoose Error
 */
router.get('/', controller.findAll);

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {post} /promos/:pid/courses postCourses
 * @apiDescription Crée un cours associé à une promo
 * @apiName postCourses
 * @apiParam {String} pid Id de la promo
 * @apiGroup Cours

 * @apiExample Example usage:
 *
 *     body:
 *  [
 *      {
 *          "title" : "Cours 2",
 *          "teacher" : "Thomas Bourdeau'huy",
 *          "start_time" : "2017-05-05T11:30:00Z",
 *          "end_time" : "2017-05-05T13:30:00Z"
 *          "attendees": [
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7a",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7v",
 *                      "ishere" : "false",
 *                      "comments" : ""
 *                   }
 *                  ]
 *      }
 *  ]
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

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {put} /promos/:pid/courses/:cid putCourses
 * @apiDescription Modifier la présence des élèves à un cours
 * @apiName putCourses
 * @apiParam {String} pid Id de la promo
 * @apiParam {String} cid Id du cours
 * @apiGroup Cours

 * @apiExample Example usage:
 *
 *     body:
 *  [
 *      {
 *          "title" : "Cours Modifié",
 *          "teacher" : "Thomas Bourdeau'Modif",
 *          "start_time" : "2017-05-05T11:30:00Z",
 *          "end_time" : "2017-05-05T13:30:00Z"
 *          "attendees": [
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7a",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7v",
 *                      "ishere" : "true",
 *                      "comments" : "Ce crétin s'est présenté en retard"
 *                   }
 *                  ]
 *      }
 *  ]
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

router.put('/', (req, res) => res.send('Hello'));

module.exports = router;
