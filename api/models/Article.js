import mongoose from 'mongoose';

const ArticleSchema = mongoose.Schema({
  title: String,
  author: { type: String, default: 'Qingxiao Xue' },
  updated: { type: Date, default: Date.now },
  content: Buffer,
  tags: [{ tag: String }],
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  uv: { type: Number, default: 0 },
});

export default mongoose.model('Article', ArticleSchema);
