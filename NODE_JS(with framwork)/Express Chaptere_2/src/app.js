const express = require("express");
const app = express();
const morgan = require("morgan");
const tourUrls = require("../Tours/urls");
const userUrls = require("../Users/urls");
const authUrls = require("../Authentications/urls");
const reviewUrls = require("../Reviews/urls");
const bookingUrls = require("../Bookings/urls");
const webUrls = require("../web/urls");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("../utils/ErrorShow");
const path = require("path");

// registering/adding template engine and template folder
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views(templates)"));

// registering the static file
app.use(express.static(path.join(__dirname, "../public")));

// Body parser, reading data from body into req.body ,It is also a middleware which used get data from request
app.use(express.json({ limit: "10kb" }));

// creating own middelware
const ownMiddelware = (request, response, next) => {
    console.log("hello from the middleware");
    // we need declare next() to perceede to the next step
    next();
};

// how to use the our own created middleware (like this )
app.use(ownMiddelware);

// use of inbuilt middleware of nodejs for logs
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.render("base");
// });

//  to enable the cookies parser middelware in express
app.use(cookieParser());
// this middelware is use for get data of form which send from the frontend side
app.use(express.urlencoded({ extended: true }));

// to link all (component or app) Router(urls) into main file
app.use("/", webUrls);
app.use("/api/v1/tours", tourUrls);
app.use("/api/v1/users", userUrls);
app.use("/api/v1/reviews", reviewUrls);
app.use("/api/v1/bookings", bookingUrls);
app.use("/api/v1/auth", authUrls);

// app.get("*", (req, res) => {
//   res.send("welcome,page dose not exist");
// });
// global error handling show message
app.use(globalErrorHandler);

module.exports = app;