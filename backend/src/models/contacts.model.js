import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactsSchema = new Schema({
  name: { type: String, required: true },
  city: String,
  email: { type: String, required: true },
  contactNumber: String,
  message: String,
  status: {
    type: String,
    enum: ['new', 'read', 'responded'],
    default: 'new',
  },
  subject: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact = model('Contact', contactsSchema);
export default Contact;
