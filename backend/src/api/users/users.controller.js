const superagent = require('superagent');
const config = require('../../config');

function getInfoFromUser(username, token) {
  return new Promise((resolve, reject) => {
    superagent
      .get(`${config.linkapp.api}/users/basicuserinfos/${username}`)
      .set('accept', 'json')
      .set('Authorization', `${token}`)
      .end((error, response) => {
        if (error) return reject(error);
        return resolve(response.body);
      });
  });
}

function replaceAllUserByAttribute(userArray, token) {
  return new Promise((resolve, reject) => {
    if (!userArray || !token) {
      reject(new Error('No informations had been specified'));
    }
    const promises = userArray.map(element => getInfoFromUser(element.username, token)
      .then((rep) => {
        let e = {};
        if (rep) {
          e = Object.assign(element, {
            firstname: rep.nom,
            lastname: rep.prenom,
          });
        }
        return e;
      }));
    Promise.all(promises || {})
      .then(results => resolve(results));
  });
}


module.exports = {
  getInfoFromUser,
  replaceAllUserByAttribute,
};
