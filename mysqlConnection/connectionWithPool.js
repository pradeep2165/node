const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "my-secret-pw",
  database: "your_database_name",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Check connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }

  console.log("MySQL connection successful!");

  // Release the connection back to the pool
  connection.release();
});
pool.query("SELECT * FROM your_table_name", (err, results) => {
  if (err) throw err;
  console.log(results);
});
