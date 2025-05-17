const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "test";

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    // Use the database and collection
    const db = client.db(dbName);
    const collection = db.collection("users");

    // Insert a document
    const result = await collection.insertOne({ name: "John", email: "john@example.com" });
    console.log("✅ Inserted:", result.insertedId);

    // Find the document
    const user = await collection.findOne({ name: "John" });
    console.log("👤 Found:", user);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    // Always close the connection
    await client.close();
    console.log("🔌 Connection closed");
  }
}

main();
