import mongoose from 'mongoose';

const SeriesSchema = mongoose.Schema({
  name: String,
  description: String,
  logo: String,
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  }],
});

export default mongoose.model('Series', SeriesSchema);
