import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const postSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
    },
    views: {
      type: Number,
      default: 0,
    },
    popular: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
    },
  },
  {
    timestamps: true,
  },
);
postSchema.plugin(mongoosePaginate);
const Post = mongoose.model('Post', postSchema);
export default Post;
