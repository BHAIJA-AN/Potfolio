// Import Zod library for schema validation
const { z } = require('zod');

// Middleware function for validating request bodies against a schema
const validate = (schema) => async (req, res, next) => {
    try {
        // Parse and validate the request body against the provided schema
        const parseBody = await schema.parseAsync(req.body);
        
        // Replace the request body with the parsed and validated data
        req.body = parseBody;
        
        // Call the next middleware or route handler
        next();
    } catch (err) {
        const status = 422; // Define the status code for validation errors
        const message = "Fill the input properly"; // Define a user-friendly error message
    
        // Safely access error details with defaults
        const extraDetails = err.errors[0].message;
    
        // Create the error object with the defined properties
        const error = {
            status,
            message,
            extraDetails
        };
    
        // Log the error for debugging purposes
        // console.log(error);
    
        // Pass the error to the next middleware (error handler)
        next(error);
    }
    
};

module.exports = validate;


 