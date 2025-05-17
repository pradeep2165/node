const { MongoClient } = require("mongodb");

// MongoDB URI
const uri = "mongodb://localhost:27017";

// Connection options with connection pool
const options = {
  maxPoolSize: 10, // max 10 connections in the pool
  minPoolSize: 2, // keep at least 2 alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(uri, options);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected with connection pool");

    const db = client.db("test");
    const users = db.collection("users");

    const result = await users.insertOne({ name: "Jane", email: "jane@example.com" });
    console.log("📦 Inserted:", result.insertedId);

    const found = await users.findOne({ name: "Jane" });
    console.log("👤 Found:", found);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("🔌 Connection closed");
  }
}

run();
