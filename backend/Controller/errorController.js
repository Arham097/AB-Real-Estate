module.exports = (err, req, res, next) => {
  // Set a default status code and message if not provided by the error object
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Send the error response
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
