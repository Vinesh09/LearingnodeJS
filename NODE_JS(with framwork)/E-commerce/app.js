const express = require("express");
const userRouter = require("./Urls/user");
const AuthRouter = require("./Urls/auth");
const app = express();

// get data from url and sent data in requested body
app.use(express.json({ limit: "10kb" }));
// this is used to get form data which is encode in url
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user/", userRouter);
// app.use("/api/v1/auth/", AuthRouter);

module.exports = app;
