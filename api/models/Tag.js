const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
  name: String,
}, {
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Tag', TagSchema);
