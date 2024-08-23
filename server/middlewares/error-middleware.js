// Middleware for handling errors
const errorMiddleware = (err, req, res, next) => {
    // Use logical OR (||) to provide default values if properties are undefined
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || "Error from backend";

    // Respond with the error status and details
    return res.status(status).json({ message, extraDetails });
};

// Export the middleware for use in other parts of the application
module.exports = errorMiddleware;
