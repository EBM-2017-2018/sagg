const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserCourses = new Schema({
  id: {
    type: String,
  },
  ishere: {
    type: Boolean,
    defaut: false,
  },
  comments: {
    type: String,
  },
});

module.exports = UserCourses;
