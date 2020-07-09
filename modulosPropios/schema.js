const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: 'ira'
});

const User = mongoose.model('User', userSchema);

module.exports = User;