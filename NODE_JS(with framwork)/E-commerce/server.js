const mongoose = require("mongoose");
const server = require("./app");
const globalErrorHandler = require("./utitls/ErrorShow");
const dotenv = require("dotenv").config({ path: "./config.env" });

DB = process.env.DATABASE;

// making the db connection
mongoose
  .connect(`${DB}E-commerce`)
  .then((con) => console.log("DB Working correctly...."))
  .catch((err) => console.log("Something went wrong. Please have a look !"));

server.use(globalErrorHandler);

server.listen(3000, () => console.log("listening server on port 8000"));
