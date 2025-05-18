const mysql = require("mysql2/promise");

async function run() {
  const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "my-secret-pw",
    database: "your_database_name",
  });

  const [rows] = await conn.execute("SELECT * FROM users");
  console.log(rows);
}

run();
