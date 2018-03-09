const jwt = require('jsonwebtoken');
const config = require('../../config');
const superagent = require('superagent');

function decodeToGetTheRoleFromToken(token) {
  if (token) {
    const decoded = jwt.decode(token);
    return decoded ? decoded.role : null;
  }
  return null;
}

function checkTokenAndRenewIt(token, callback) {
  if (token) {
    superagent
      .get(`${config.linkapp.api}/checkandrefreshtoken`)
      .set('accept', 'json')
      .set('Authorization', `JWT ${token}`)
      .end((error, response) => {
        if (error || response.status !== 200) {
          callback(error, null);
        } else {
          callback(null, decodeToGetTheRoleFromToken(response.body.newToken) !== 'etudiant');
        }
      });
  } else {
    callback(new Error('No token has been provided'), null);
  }
}

module.exports = {
  checkTokenAndRenewIt,
};
