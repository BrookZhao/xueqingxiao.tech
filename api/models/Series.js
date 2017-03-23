const mongoose = require('mongoose');

const SeriesSchema = mongoose.Schema({
  name: String,
  description: String,
  logo: String,
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  }],
});

module.exports = mongoose.model('Series', SeriesSchema);
