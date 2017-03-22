import mongoose from 'mongoose';

const TagSchema = mongoose.Schema({
  name: String,
});

export default mongoose.model('Tag', TagSchema);
