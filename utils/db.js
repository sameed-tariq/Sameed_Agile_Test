const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/Book";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Successfully connected to DB!");
  } catch (error) {
    console.error("Connection failed!");
    process.exit(0);
  }
};

module.exports = connectDb;
