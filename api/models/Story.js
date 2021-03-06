const mongoose = require('mongoose');

const StorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Shawn Sit'
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  series: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Series',
    required: true,
  },
  likes: {
    type: Number,
    default: 0
  },
  uv: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: false,
  },
}, {
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { getters: true, virtuals: true }
});

module.exports = mongoose.model('Story', StorySchema);
