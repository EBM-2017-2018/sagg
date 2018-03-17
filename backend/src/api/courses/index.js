
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');

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
 *  ],
 *    "new_access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6
 * InJvb3QiLCJyb2xlIjoiZXR1ZGlhbnQiLCJub20iOiJyb290IiwicHJlbm9tIjoicm9vdCIsI
 * mVtYWlsIjoicm9vdEBldHVkaWFudC5mciIsImlhdCI6MTUyMDg1MjkxN30.fbHx4vToa-K9pAiVGn1q-6n3N
 * -vH7tk_DMQssqk-5w0"
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
 * success : true
 * new_access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ
 * vb3QiLCJyb2xlIjoiZXR1ZGlhbnQiLCJub20iOiJyb290IiwicHJlbm9tIjoicm9vdCIsImVtYWlsIjo
 * icm9vdEBldHVkaWFudC5mciIsImlhdCI6MTUyMDg1MjkxN30.fbHx4vToa-K9pAiVGn1q-6n3N-vH7tk_DMQssqk-5w0
 *}

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
 * new_access_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJ
 * vb3QiLCJyb2xlIjoiZXR1ZGlhbnQiLCJub20iOiJyb290IiwicHJlbm9tIjoicm9vdCIsImVtYWlsIjo
 * icm9vdEBldHVkaWFudC5mciIsImlhdCI6MTUyMDg1MjkxN30.fbHx4vToa-K9pAiVGn1q-6n3N-vH7tk_DMQssqk-5w0
 *}

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing/WrongToken Fields
 */

router.put('/courses/:cid', controller.update);

module.exports = router;
