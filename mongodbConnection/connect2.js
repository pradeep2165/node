const { default: mongoose } = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    //passing options to connect
    //   mongoose.connect('mongodb://127.0.0.1:27017/test?socketTimeoutMS=1000&bufferCommands=false&authSource=otherdb');
    console.log("MongoDB connected successfully");
  } catch (error) {
    handleError(error);
  }
}
connect();

// Example of connecting to a replica set with multiple hosts
// mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');
