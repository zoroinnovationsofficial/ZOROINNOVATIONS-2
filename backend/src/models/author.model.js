import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  avatar: String,
  email: String,
  social_links: {
    twitter: String,
    linkedin: String,
    github: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('Author', authorSchema);
