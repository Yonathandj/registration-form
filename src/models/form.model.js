const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  }
});

const Registration = mongoose.model('Registration', formDataSchema);
module.exports = Registration;