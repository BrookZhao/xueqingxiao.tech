import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  avatarUrl: String,
  nickname: String,
  email: String,
});

export default mongoose.model('User', UserSchema);
