const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/testdb";

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
