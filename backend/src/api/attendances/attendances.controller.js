const Attendance = require('./attendance.model');

module.exports = {};

module.exports.create = (req, res) => {
  const attendance = new Attendance(req.body);
  attendance.save((err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json({ success: true });
  });
};

module.exports.findAll = (req, res) => {
  Attendance.find({}, (err, attendances) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(attendances);
  });
};

module.exports.warnIsHere = (req, res) => {
  Attendance.update(
    { _id: req.params.id, 'user.id': req.params.uid },
    {
      $set: {
        'user.$.ishere': true,
      },
    },
    { multi: true },
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({
        code: 'SUCCESS_UPDATE',
        message: 'L\'utilisateur a correctement notifié sa présence',
      });
    },
  );
};
