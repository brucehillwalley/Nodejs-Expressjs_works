//* ERROR HANDLER

//? errorHandler middleware'i eklendi. errorHandler en son root tur.
module.exports = (err, req, res, next) => {
    console.log("errorHandler calisti.");
  
    const errorStatusCode = res?.errorStatusCode || 500;
  
    res.status(errorStatusCode).send({
      error: true,
      message: err.message,
      cause: err.cause,
      stack: err.stack,
    });
  };
  
