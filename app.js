// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const path = require('path');
const path = require("path");


// router import
const landingPage = require("./router/landingPageRouter/landingPage");

// internal imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/common/errorHandler");

// middleWare 

const app = express();
dotenv.config();
// set view engine
app.set("views", "./views");
app.set("view engine", "ejs");

// database connection
// mongoose
//   .connect(process.env.MONGO_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("database connection successful! ------------------------------------------------------------------------------"))
//   .catch((err) => console.log(err));

 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
// app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", landingPage);

// 404 not found handler
// app.use(notFoundHandler);

// common error handler
// app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening to port `, process.env.PORT);
});
