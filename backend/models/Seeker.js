const mongoose = require('mongoose');

const SeekerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('Seeker', SeekerSchema);