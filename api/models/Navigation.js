const mongoose = require('mongoose');

const NavigationSchema = mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
}, {
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Navigation', NavigationSchema);
