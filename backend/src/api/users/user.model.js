const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  username: {
    type: String,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = User;
