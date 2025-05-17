const { MongoClient } = require("mongodb");

// URIs for two different databases or clusters
const uri1 = "mongodb://localhost:27017";
const uri2 = "mongodb://anotherhost:27018";

const client1 = new MongoClient(uri1, { useUnifiedTopology: true });
const client2 = new MongoClient(uri2, { useUnifiedTopology: true });

async function connectMultipleDatabases() {
  try {
    // Connect to both databases
    await client1.connect();
    await client2.connect();

    console.log("✅ Connected to both MongoDB instances");

    // Access each database
    const db1 = client1.db("firstDatabase");
    const db2 = client2.db("secondDatabase");

    // Collections
    const collection1 = db1.collection("users");
    const collection2 = db2.collection("products");

    // Perform operations
    const result1 = await collection1.insertOne({ name: "User A" });
    const result2 = await collection2.insertOne({ title: "Product B" });

    console.log("📦 Inserted into db1:", result1.insertedId);
    console.log("📦 Inserted into db2:", result2.insertedId);
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  } finally {
    // Close connections
    await client1.close();
    await client2.close();
    console.log("🔌 Connections closed");
  }
}

connectMultipleDatabases();
