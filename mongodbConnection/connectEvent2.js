const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/mongoose_test");

conn.on("connected", () => console.log("connected"));
conn.on("open", () => console.log("open"));
conn.on("disconnected", () => console.log("disconnected"));
conn.on("reconnected", () => console.log("reconnected"));
conn.on("disconnecting", () => console.log("disconnecting"));
conn.on("close", () => console.log("close"));
setTimeout(() => {
  conn.close();
}, 5000);
