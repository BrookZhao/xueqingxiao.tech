const mongoose = require('mongoose');

const NavigationSchema = mongoose.Schema({
  name: String,
  link: String,
});

module.exports = mongoose.model('Navigation', NavigationSchema);
