const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  avatarUrl: String,
  nickname: String,
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
