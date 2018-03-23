const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = require('../users/user.model');

const Promo = new Schema({
  nomPromo: {
    type: String,
  },
  membres: [User],
  responsable: {
    type: String,
  },
});

module.exports = Promo;
