const Course = require('./course.model');
// const { checkTokenAndRenewIt } = require('../auth/jwt');

module.exports = {};

module.exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).json({
      code: 'MISSING_FIELDS',
      success: false,
      message: 'Des champs sont manquants',
    });
  }
  if (!req.params.pid) {
    res.status(404).json({
      code: 'MISSING_PROMO',
      success: false,
      message: 'La promo n\'est pas défini',
    });
  }
  // checkTokenAndRenewIt(req.token, (error, validation) => {
  //   if (error || !validation) {
  //     res.status(403).json({
  //       code: 'UNAUTHORIZED',
  //       message: 'Le token est manquant, est invalide ou bien cet utilisation n\'a pas le droit',
  //     });
  //   }
  const course = new Course(Object.assign({}, req.body, { promoId: req.params.pid }));
  course.save((err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json({
      success: true,
    });
  });
  // });
};

module.exports.findAll = (req, res) => {
  if (!req.params.pid) {
    res.status(404).json({
      code: 'MISSING_PROMO',
      success: false,
      message: 'La promo n\'est pas défini',
    });
  }
  Course.find(
    { promoId: req.params.pid },
    (err, courses) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(courses);
    },
  );
};

module.exports.update = (req, res) => {
  if (!req.body) {
    res.status(404).json({
      code: 'MISSING_FIELDS',
      success: false,
      message: 'Des champs sont manquants',
    });
  }
  if (!req.params.cid) {
    res.status(404).json({
      code: 'MISSING_PROMO_OR_COURSE',
      success: false,
      message: 'La promo ou le cours n\'est pas défini',
    });
  }
  Course.update(
    { _id: req.params.cid },
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({
        success: true,
        message: 'Le cours a correctement été modifié',
      });
    },
  );
};
