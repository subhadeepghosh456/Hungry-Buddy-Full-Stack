const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/hungrybuddy`);
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("MONGODB ERROR", error);
    process.exit(1);
  }
};

module.exports = connectDB;
