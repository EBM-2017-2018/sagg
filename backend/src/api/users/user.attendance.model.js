const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserAttendance = new Schema({
  id: {
    type: String,
  },
  ishere: {
    type: Boolean,
    defaut: false,
  },
});

module.exports = UserAttendance;
