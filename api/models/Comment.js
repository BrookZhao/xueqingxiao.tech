const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  content: String,
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
