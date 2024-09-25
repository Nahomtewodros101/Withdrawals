const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || 500; // Use error status or default to 500
    res.status(statusCode).json({
      error: {
        message: err.message || "Internal Server Error", // Default message
        status: statusCode,
      },
    });
  };
  
  export default errorHandler;
  