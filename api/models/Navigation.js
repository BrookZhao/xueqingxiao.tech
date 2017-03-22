import mongoose from 'mongoose';

const NavigationSchema = mongoose.Schema({
  name: String,
  link: String,
});

export default mongoose.model('Navigation', NavigationSchema);
