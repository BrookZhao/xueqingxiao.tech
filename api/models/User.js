const mongoose = require('mongoose');
const schemaConfig = require('./schemaConfig');

const UserSchema = mongoose.Schema({
  avatarUrl: String,
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, schemaConfig);

module.exports = mongoose.model('User', UserSchema);
