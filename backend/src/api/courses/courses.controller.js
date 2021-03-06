const Course = require('./course.model');
const { replaceAllUserByAttribute } = require('../users/users.controller');

module.exports = {};

module.exports.create = (req, res) => {
  if (!req.body) {
    return res.status(404).json({
      code: 'MISSING_FIELDS',
      success: false,
      message: 'Des champs sont manquants',
    });
  }
  if (req.user && req.user.role === 'etudiant') {
    return res.status(403).json({
      code: 'UNAUTHORIZED',
      success: false,
      message: 'Cet action est uniquement réservée à un professeur/intervant.',
    });
  }
  const course = new Course(Object.assign({}, req.body, { promoId: req.params.pid }));
  course.save((err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json({
      success: true,
      id: course._id, //eslint-disable-line
    });
  });
  return null;
};

module.exports.findAll = (req, res) => {
  if (!req.params.pid) {
    return res.status(404).json({
      code: 'MISSING_PROMO',
      success: false,
      message: 'La promo n\'est pas défini',
    });
  }
  if (req.user && req.user.role === 'etudiant') {
    return res.status(403).json({
      code: 'UNAUTHORIZED',
      success: false,
      message: 'Cet action est uniquement réservée à un professeur/intervant.',
    });
  }
  Course.find(
    { promoId: req.params.pid },
    (err, courses) => {
      if (err) {
        return res.status(500).json(err);
      }
      const promises = courses.map(element =>
        replaceAllUserByAttribute(element.attendees, req.headers.authorization)
          .then((rep) => {
            Object.assign(element.attendees, rep);
            return element;
          }));
      Promise.all(promises)
        .then(results => res.status(200).json({
          courses: results,
        }));
      return courses || null;
    },
  );
  return null;
};

module.exports.findAllCourses = (req, res) => {
  if (req.user && req.user.role === 'etudiant') {
    return res.status(403).json({
      code: 'UNAUTHORIZED',
      success: false,
      message: 'Cet action est uniquement réservée à un professeur/intervant.',
    });
  }
  Course.find((err, courses) => {
    if (err) {
      return res.status(500).json(err);
    }
    const promises = courses.map(element =>
      replaceAllUserByAttribute(element.attendees, req.headers.authorization)
        .then((rep) => {
          Object.assign(element.attendees, rep);
          return element;
        }));
    Promise.all(promises)
      .then(results => res.status(200).json({
        courses: results,
      }));
    return courses || null;
  });
  return null;
};


module.exports.update = (req, res) => {
  if (!req.body) {
    return res.status(404).json({
      code: 'MISSING_FIELDS',
      success: false,
      message: 'Des champs sont manquants',
    });
  }
  if (!req.params.cid) {
    return res.status(404).json({
      code: 'MISSING_PROMO_OR_COURSE',
      success: false,
      message: 'La promo ou le cours n\'est pas défini',
    });
  }
  if (req.user && req.user.role === 'etudiant') {
    return res.status(403).json({
      code: 'UNAUTHORIZED',
      success: false,
      message: 'Cet action est uniquement réservée à un professeur/intervant.',
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
        message: 'Le cours a correctement été modifié.',
      });
    },
  );
  return null;
};
module.exports.delete = (req, res) => {
  if (!req.params.cid) {
    return res.status(404).json({
      code: 'MISSING_PROMO_OR_COURSE',
      success: false,
      message: 'Le cours n\'est pas defini',
    });
  }
  if (req.user && req.user.role === 'etudiant') {
    return res.status(403).json({
      code: 'UNAUTHORIZED',
      success: false,
      message: 'Cet action est uniquement réservée à un professeur/intervant.',
    });
  }
  Course.remove(
    { _id: req.params.cid },
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({
        success: true,
        message: 'Le cours a correctement été supprumé.',
      });
    },
  );
  return null;
};
