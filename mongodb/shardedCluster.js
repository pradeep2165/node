const { MongoClient } = require("mongodb");

// Connect via mongos router
const uri = "mongodb://mongos1:27017,mongos2:27017/mydatabase?replicaSet=rs0&readPreference=nearest";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  maxPoolSize: 20,
});

async function connectSharded() {
  try {
    await client.connect();
    console.log("✅ Connected to Sharded Cluster");

    const db = client.db("mydatabase");
    const users = db.collection("users");

    const result = await users.insertOne({ name: "ShardedUser", city: "Delhi" });
    console.log("📦 Inserted:", result.insertedId);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

connectSharded();
