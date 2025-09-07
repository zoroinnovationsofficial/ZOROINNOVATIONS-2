import NewsletterSubscriber from '../models/newsletterSubscriber.model.js';

// POST /api/v1/newsletter/subscribe
export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    let subscriber = await NewsletterSubscriber.findOne({ email });
    if (subscriber) {
      if (subscriber.status === 'active') {
        return res.status(400).json({ error: 'Already subscribed' });
      }
      subscriber.status = 'active';
      subscriber.subscribed_at = new Date();
    } else {
      subscriber = new NewsletterSubscriber({ email });
    }

    await subscriber.save();
    res.json({ message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/v1/newsletter/unsubscribe
export const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const subscriber = await NewsletterSubscriber.findOne({ email });
    if (!subscriber || subscriber.status !== 'active') {
      return res
        .status(400)
        .json({ error: 'Not subscribed or already unsubscribed' });
    }

    subscriber.status = 'unsubscribed';
    await subscriber.save();
    res.json({ message: 'Unsubscribed successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
