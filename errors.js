// Custom error classes for different types of errors

// Error for when a resource is not found
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

// Error for validation failures
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

// Error for authentication failures
class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}

// Global error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Handle custom errors
  if (err instanceof NotFoundError || 
      err instanceof ValidationError || 
      err instanceof AuthenticationError) {
    return res.status(err.statusCode).json({
      error: err.message
    });
  }

  // Handle 404 errors
  if (err.status === 404) {
    return res.status(404).json({
      error: 'Not Found'
    });
  }

  // Handle all other errors
  res.status(500).json({
    error: 'Something went wrong!'
  });
};

// Export the error classes and handler
module.exports = {
  NotFoundError,
  ValidationError,
  AuthenticationError,
  errorHandler
}; 