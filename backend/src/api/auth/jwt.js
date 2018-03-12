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
        if (response.body && response.body.newToken) {
          callback(
            null,
            {
              validation: decodeToGetTheRoleFromToken(response.body.newToken) !== 'etudiant',
              newToken: response.body.newToken,
            },
          );
        } else {
          callback(new Error('Unauthorized'), null);
        }
      });
  } else {
    callback(new Error('No token has been provided'), null);
  }
}

module.exports = {
  checkTokenAndRenewIt,
};
