class CustomeErrors extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status =
      this.statusCode >= 400 && this.statusCode < 500 ? "fail" : "error";
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = CustomeErrors;
