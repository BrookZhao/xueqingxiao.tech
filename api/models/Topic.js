import mongoose from 'mongoose';

const TopicSchema = mongoose.Schema({
  name: String,
  description: String,
  logo: String,
});

export default mongoose.model('Topic', TopicSchema);
