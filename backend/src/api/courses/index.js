
const { Router } = require('express');

const router = new Router();

const controller = require('./courses.controller');


/**
 * @api {get} /api/courses Get all courses
 * @apiName GetCourse
 * @apiGroup Static Pages
 * @apiDescription Cette URL permet de récupérer tous les cours
 *
 * @apiParamExample  {String} Request-Example:
 *
 * @apiSuccessExample {html} Success-Response:
     HTTP/1.1 200 OK
     [
     {
     "promo": [],
     "_id": "5a9e7d53e1e17ba00442659d",
     "title": "Test",
     "createdAt": "2018-03-06T11:36:51.986Z",
     "updatedAt": "2018-03-06T11:36:51.986Z",
     "__v": 0
     },
     {
     "promo": [
     {
     "membres": [
     "David",
     "Yazid"
     ],
     "nomPromo": "haha",
     "responsable": "TBH",
     "_id": "5a9e7f87e1e17ba00442659e"
     }
     ],
     "_id": "5a9e7f87e1e17ba00442659f",
     "title": "Android",
     "createdAt": "2018-03-06T11:46:15.051Z",
     "updatedAt": "2018-03-06T11:46:15.051Z",
     "__v": 0
     }
     ]
 */
router.get('/', controller.findAll);


/**
 * @api {post} /api/courses Post a new course
 * @apiName PostCourse
 * @apiGroup Static Pages
 * @apiDescription Cette URL permet d'enregister un nouveau cours
 *
 * @apiBody {}
 * @apiParamExample  {String} Request-Example:
 *
 * @apiSuccessExample {html} Success-Response:
     HTTP/1.1 201 OK
     {success : "true", "id" : _id"}
 */
router.post('/', controller.create);


module.exports = router;
