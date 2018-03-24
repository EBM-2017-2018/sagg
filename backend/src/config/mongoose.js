const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://david:123456@ds157528.mlab.com:57528/sagg', { safe: false });
