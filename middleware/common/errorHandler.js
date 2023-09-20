const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
  next()
}

// default error handler
function errorHandler(err, req, res, next) {
    // html response
    res.render("404/404", {
      title: "Error page",
    });
  
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
