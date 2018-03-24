const mongoose = require('mongoose');

const UserCourses = require('../users/user.course.model');

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    teacher: { type: String },
    start_time: { type: Date, default: Date.now() },
    end_time: { type: Date, default: Date.now() },
    attendees: [UserCourses],
    promoId: { type: String },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Course', CourseSchema);
