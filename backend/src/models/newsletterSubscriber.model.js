import mongoose from 'mongoose';

const newsletterSubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribed_at: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'unsubscribed'], default: 'active' },
});

export default mongoose.model(
  'NewsletterSubscriber',
  newsletterSubscriberSchema,
);
