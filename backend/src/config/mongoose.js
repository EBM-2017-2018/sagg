const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { safe: false });
