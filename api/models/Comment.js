const mongoose = require('mongoose');
const schemaConfig = require('./schemaConfig');

const CommentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story',
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, schemaConfig);

module.exports = mongoose.model('Comment', CommentSchema);
