const Contact = require('../models/contact-model');

// Controller to handle contact form submission
const contactform = async (req, res, next) => {
    try {
        console.log('Request Body:', req.body);  // Log the request body
        const response = req.body;  // Extract the request body
        const newContact = await Contact.create(response);  // Create a new contact document
        console.log('New Contact:', newContact);  // Log the newly created document
        return res.status(200).json({ message: 'Contact form created successfully' });  // Send success response
    } catch (error) {
        console.error('Error:', error);  // Log the error
        return res.status(500).json({ message: 'Details not delivered' });  // Send error response
    }
};

module.exports = contactform;

