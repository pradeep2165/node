// db.js
const mysql = require("mysql2");
// run docker
//docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "my-secret-pw",
  // database: "test",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting:", err.stack);
    return;
  }
  console.log("Connected as id", connection.threadId);
});

module.exports = connection;
