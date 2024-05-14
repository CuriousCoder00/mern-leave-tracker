const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB database using Mongoose.
mongoose.connect(process.env.MONGO_URI).then(
  () => {
    console.log("Database connection established");
  },
  (err) => {
    console.log("Error connecting Database instance due to: ", err);
  }
);
