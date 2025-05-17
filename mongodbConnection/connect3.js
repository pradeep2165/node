const mongoose = require("mongoose");

const serverSelectionTimeoutMS = 5000;

// Prints "Failed 0", "Failed 1", "Failed 2" and then throws an
// error. Exits after approximately 15 seconds.
async function connect() {
  for (let i = 0; i < 3; ++i) {
    try {
      await mongoose.connect("mongodb://doesnt.exist:27017/test", {
        serverSelectionTimeoutMS,
      });
      break;
    } catch (err) {
      console.log("Failed", i);
      if (i >= 2) {
        throw err;
      }
    }
  }
}
connect();
