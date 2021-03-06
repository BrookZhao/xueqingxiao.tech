const mongoose = require('mongoose');

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
}, {
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('User', UserSchema);
