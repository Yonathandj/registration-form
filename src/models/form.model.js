const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  }
});

const Registration = mongoose.model('Registration', formDataSchema);
module.exports = Registration;