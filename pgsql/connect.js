const { Pool } = require("pg");

// Replace with your PostgreSQL config
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432, // default PostgreSQL port
});

// module.exports = pool;
// createTable.js

async function createTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    );
  `;

  try {
    await pool.query(query);
    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

createTable();
