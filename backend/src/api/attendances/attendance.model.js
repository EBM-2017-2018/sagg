const mongoose = require('mongoose');

const UserAttendance = require('../users/user.attendance.model');

const AttendanceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    attendees: [UserAttendance],
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Attendance', AttendanceSchema);
