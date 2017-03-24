const mongoose = require('mongoose');
const schemaConfig = require('./schemaConfig');

const NavigationSchema = mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
}, schemaConfig);

module.exports = mongoose.model('Navigation', NavigationSchema);
