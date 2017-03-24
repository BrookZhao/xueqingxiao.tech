const mongoose = require('mongoose');

const SeriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  }],
});

module.exports = mongoose.model('Series', SeriesSchema);
