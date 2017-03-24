const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Shawn Sit'
  },
  content: {
    type: String
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  likes: {
    type: Number,
    default: 0
  },
  uv: {
    type: Number,
    default: 0
  },
  updated: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Story', ArticleSchema);
