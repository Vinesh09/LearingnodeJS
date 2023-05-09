const fs = require("fs");
const Tour = require("../Models/tour");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../src/config.env" });

const DB = process.env.DATABASE;

// Making connection to the DataBase
mongoose.connect(DB).then((con) => {
  console.log("Database Connected Successfully 🎉");
});

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
