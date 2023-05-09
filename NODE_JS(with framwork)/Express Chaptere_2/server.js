const mongoose = require("mongoose");
const dotenv = require("dotenv");

// import data from enviorment file
dotenv.config({ path: ".src/config.env" });

const app = require("./src/app");

const DB = process.env.DATABASE;

// Making connection to the DataBase
mongoose
  .connect(DB)
  .then((con) => {
    console.log("Database Connected Successfully 🎉");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});

// app.listen(3000, () => console.log("Sever Listening on 127.0.0.1:3000"));
