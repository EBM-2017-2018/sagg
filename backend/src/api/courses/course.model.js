const mongoose = require('mongoose');

const Promo = require('../promo/promo.model');

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    promo: [Promo],
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Course', CourseSchema);
