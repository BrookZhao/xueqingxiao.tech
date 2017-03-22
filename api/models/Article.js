import mongoose from 'mongoose';

const ArticleSchema = mongoose.Schema({
  title: String,
  author: {
    type: String,
    default: 'Shawn Sit'
  },
  content: Buffer,
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
  }],
  likes: {
    type: Number,
    default: 0
  },
  uv: {
    type: Number,
    default: 0
  },
  updated: {
    type: Date,
    default: Date.now
  },
});

export default mongoose.model('Article', ArticleSchema);
