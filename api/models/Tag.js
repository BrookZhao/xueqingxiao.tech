const mongoose = require('mongoose');
const schemaConfig = require('./schemaConfig');

const TagSchema = mongoose.Schema({
  name: String,
}, schemaConfig);

module.exports = mongoose.model('Tag', TagSchema);
