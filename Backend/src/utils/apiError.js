class ApiError extends Error {
  constructor(
    statusCode,
    message = "Sorry, Something went wrong",
    error = [],
    stack
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode =
      typeof statusCode === "number" ? statusCode : Number(statusCode) || 500;
    this.message = typeof message === "string" ? message : String(message);
    this.data = null;
    this.error = error ?? [];
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      error: this.error,
      data: this.data,
    };
  }
}

export { ApiError };
export default ApiError;
