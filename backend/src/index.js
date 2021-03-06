const path = require('path');

const express = require('express');
const serveStatic = require('serve-static');
const config = require('./config');

const app = express();
const server = require('http').Server(app);


require('./config/mongoose');
require('./config/express')(app);

app.use(require('ebm-auth').initialize({
  provider: 'https://linkapp.ebm.nymous.io/',
}));

app.use('/api', require('ebm-auth').requireAuth({
  provider: 'https://linkapp.ebm.nymous.io/',
}), require('./api'));

app.use(serveStatic('./public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

server.listen(config.app.port, (err) => {
  if (err) console.error(err);
  else console.log(`Listening on port ${config.app.port}`);
});
