const bodyParser = require('body-parser');
const cors = require('cors');
const bearerToken = require('express-bearer-token');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  // To get the token JWT from authorization by using req.token
  app.use(bearerToken({
    headerKey: 'JWT',
  }));
};
