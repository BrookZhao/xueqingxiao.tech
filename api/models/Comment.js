import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
  content: String,
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

export default mongoose.model('Comment', CommentSchema);
