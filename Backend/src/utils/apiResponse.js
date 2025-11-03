class ApiResponse {
  constructor(statusCode = 200, data = null, message = "Request Success") {
    this.statusCode =
      typeof statusCode === "number" ? statusCode : Number(statusCode) || 200;
    this.data = data === undefined ? null : data;
    this.message = typeof message === "string" ? message : String(message);
    this.success = this.statusCode >= 200 && this.statusCode < 400;
  }
  toJSON() {
    return {
      success: this.success,
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
    };
  }
}

export { ApiResponse };
export default ApiResponse;
