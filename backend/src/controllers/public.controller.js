import Contact from '../models/contacts.model.js';

// Save message to db
export const submitMessage = async (req, res) => {
  try {
    const { name, email, message, contactNumber, city, subject } = req.body;

    // Create and save the message
    const newContact = new Contact({
      name,
      email,
      message,
      contactNumber,
      city,
      subject,
    });

    const savedContact = await newContact.save();

    res.status(201).json({
      message: 'Message submitted successfully.',
      data: savedContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Something went wrong. Please try again later.' });
  }
};
