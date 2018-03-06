const Course = require('./course.model');

module.exports = {};

module.exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).json({
      code: 'MISSING_FIELDS',
      message: 'Des champs sont manquants',
    });
  }
  const course = new Course(req.body);
  course.save((err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json({ success: true });
  });
};

module.exports.findAll = (req, res) => {
  Course.find({}, (err, courses) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(courses);
  });
};
