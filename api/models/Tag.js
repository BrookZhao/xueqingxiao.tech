const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Tag', TagSchema);
