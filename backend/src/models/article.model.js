import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    tag: {
      type: String,
      required: true,
    },
    tag_color: {
      type: String,
      default: 'bg-gray-100 text-gray-600',
    },
    author: {
      type: String,
      required: true,
    },
    author_img: {
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
    likes: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      //  ref: 'categories'
    },
  },
  {
    timestamps: true,
  },
);

articleSchema.plugin(mongoosePaginate);
const Article = mongoose.model('Article', articleSchema);
export default Article;
