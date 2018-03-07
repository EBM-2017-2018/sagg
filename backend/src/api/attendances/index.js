const { Router } = require('express');

const router = new Router();

const controller = require('./attendances.controller');

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {post} /attendances/ postAttendances
 * @apiDescription crée une feuille d'appel
 * @apiName postAttendances
 * @apiGroup Attendances
 * @apiExample Example usage:
 *
 *     body:
 * {
 * "title" : "F010101",
 * "attenders" : [
 * {
 * "id" : "5a9e7d53e1e17ba00442659d",
 * "ishere" : true
 * "comments" : "Tout le tmeps en retard"
 * },
 * {
 * "id" : "5a9e7d53e1e17ba0044265ad",
 * "ishere" : false,
 * "comments": "il est relou"
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

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {get} /attendances/ getAttendances
 * @apiDescription récupère la liste de toutes les feuilles d'appels avec les présents (leur id)
 * @apiName getAttendances
 * @apiGroup Attendances
 * @apiSuccess {attendances[]} attendances liste des feuilles d'appels
 * @apiSuccessExample {json} Success-Response:
 *{
 *  [
 *      {
 *          "date" : "2018-03-06T14:20:07.222Z"
 *          "attendees": [
 *                      {
 *                         "id" : "5a9e7d53e1e17ba00442659d",
 *                         "ishere" : true,
 *                         "comments" : "c'est le roi des boubous"
 *                      },
 *                      {
 *                         "id" : "5a9e7d53e1e17ba00442658q",
 *                         "ishere" : false
 *                      },
 *                  ],
 *          "title": "Feuille d'appel 001",
 *      }
 *  ]
 *}

 *
 * @apiError (500) Mongoose Error
 */
router.get('/', controller.findAll);

/**
* @apiVersion 1.0.0-SNAPSHOT
 * @api {put} /attendances/:id/user/:uid putAttendances
 * @apiDescription modifier la présence d'un élève
 * @apiName warnIsHere
 * @apiGroup Attendances
 * @apiParam {String} id Id de la feuille d'appel
 * @apiParam {String} uid Id de l'utilisateur
 * @apiSuccess {Boolean} success API response
 * @apiSuccessExample {json} Success-Response:
 *{
 *  code : 'SUCCESS_UPDATE,
 *  message : 'L'utilisateur a correctement été modifié'
 *}

 *
 * @apiError (500) Mongoose Error
 * @apiError (404) Missing Fields
 */

router.put('/:id/user/:uid', controller.warnIsHere);

module.exports = router;
