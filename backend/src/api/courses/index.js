
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {get} /promos/courses getAllCourses
 * @apiDescription récupère la liste de tous les cours
 * Attention le rôle du token doit être différent d'un étudiant pour y acceder
 * @apiName getAllCourses
 * @apiHeader {String} Authorization JWT token
 * @apiGroup Cours
 * @apiSuccess {courses[]} courses liste des cours
 * @apiSuccessExample {json} Success-Response:
 *{
 *  courses: [
 *      {
 *          "promoId" : "5b9ea41a4e2d37b1400c7b7a",
 *          "title" : "Cours 1",
 *          "teacher" : "Thomas Bourdeau'huy",
 *          "start_time" : "2017-05-05T11:30:00Z",
 *          "end_time" : "2017-05-05T13:30:00Z"
 *          "attendees": [
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7a",
 *                      "username" : "davzer",
 *                      "firstname": "Paul",
 *                      "lastname": "Jacques"
 *                      "img": "image"
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "id" : "5a9edz41a4e7d37b1400c7b7v",
 *                      "username" : "davzer",
 *                      "firstname": "Paul",
 *                      "lastname": "Jacques"
 *                      "img": "image"
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   }
 *                  ],
 *          "_id": "5a9ea41a4e7d37b1400c7b7e",
 *      }
 *  ],
 *}

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing/WrongToken Fields
 */
router.get('/courses', controller.findAllCourses);

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {get} /promos/:pid/courses getCourses
 * @apiDescription récupère la liste de tous les cours associés à une promo
 * Attention le rôle du token doit être différent d'un étudiant pour y acceder
 * @apiName getCourses
 * @apiParam {String} pid Id de la promo
 * @apiHeader {String} Authorization JWT token
 * @apiGroup Cours
 * @apiSuccess {courses[]} courses liste des cours
 * @apiSuccessExample {json} Success-Response:
 *{
 *  courses: [
 *      {
 *          "promoId" : "5b9ea41a4e2d37b1400c7b7a",
 *          "title" : "Cours 1",
 *          "teacher" : "Thomas Bourdeau'huy",
 *          "start_time" : "2017-05-05T11:30:00Z",
 *          "end_time" : "2017-05-05T13:30:00Z"
 *          "attendees": [
 *                   {
 *                      "username" : "davzer",
 *                      "firstname": "Paul",
 *                      "lastname": "Jacques"
 *                      "img": "image"
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "username" : "davzer",
 *                      "firstname": "Paul",
 *                      "lastname": "Jacques"
 *                      "img": "image"
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   }
 *                  ],
 *          "_id": "5a9ea41a4e7d37b1400c7b7e",
 *      }
 *  ],
 *}

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing/WrongToken Fields
 */
router.get('/:pid/courses', controller.findAll);

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {post} /promos/:pid/courses postCourses
 * @apiDescription Crée un cours associé à une promo, date au format ISO8601
 * @apiName postCourses
 * @apiHeader {String} Authorization JWT token
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
 *                      "username" : "davzer",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "username" : "davzer",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   }
 *                  ]
 *      }
 *  ]
 *}
 *
 * @apiSuccess {Boolean} success API response
 * @apiSuccessExample {json} Success-Response:
 *{
 * success : true
 * }

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing/WrongToken Fields
 */
router.post('/:pid/courses', controller.create);

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {put} /promos/courses/:cid putCourses
 * @apiDescription Modifier la présence des élèves à un cours, id promo non nécess
 * @apiName putCourses
 * @apiHeader {String} Authorization JWT token
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
 *                      "username" : "davzer",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
 *                   },
 *                   {
 *                      "username" : "davzer",
 *                      "ishere" : "true",
 *                      "comments" : "TRop de retard, attention à lui"
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
 * }

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing/WrongToken Fields
 */

router.put('/courses/:cid', controller.update);


/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {delete} /promos/courses/:cid deleteCourse
 * @apiDescription Supprime un cours
 * @apiName deleteCourse
 * @apiHeader {String} Authorization JWT token
 * @apiParam {String} cid Id du cours
 * @apiGroup Cours
 *
 * @apiSuccess {Boolean} success API response
 * @apiSuccessExample {json} Success-Response:
 *{
 *  success : true
 * }

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing/WrongToken Fields
 */

router.delete('/courses/:cid', controller.delete);

module.exports = router;
