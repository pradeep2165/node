const { MongoClient } = require("mongodb");

// MongoDB URI for replica set (include all members)
const uri = "mongodb://host1:27017,host2:27017,host3:27017/test?replicaSet=myReplicaSet";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
};

const client = new MongoClient(uri, options);

async function connectReplicaSet() {
  try {
    await client.connect();
    console.log("✅ Connected to Replica Set");

    const db = client.db("mydatabase");
    const users = db.collection("users");

    const result = await users.insertOne({ name: "ReplicatedUser" });
    console.log("📦 Inserted:", result.insertedId);
  } catch (error) {
    console.error("❌ Connection error:", error);
  } finally {
    await client.close();
    console.log("🔌 Connection closed");
  }
}

connectReplicaSet();
