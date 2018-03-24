const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserCourses = new Schema({
  username: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  img: {
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
