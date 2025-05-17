const express = require("express");
const mongoose = require("mongoose");

const tenantIdToConnection = {};

const app = express();

app.get("/users/:tenantId", function (req, res) {
  let initialConnection = Promise.resolve();
  const { tenantId } = req.params;
  if (!tenantIdToConnection[tenantId]) {
    tenantIdToConnection[tenantId] = mongoose.createConnection(`mongodb://127.0.0.1:27017/tenant_${tenantId}`);
    tenantIdToConnection[tenantId].model("User", mongoose.Schema({ name: String }));
    initialConnection = tenantIdToConnection[tenantId].asPromise();
  }
  const db = tenantIdToConnection[tenantId];
  initialConnection
    .then(() => db.model("User").find())
    .then((users) => res.json({ users }))
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
