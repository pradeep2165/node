const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("your_database_name", "root", "my-secret-pw", {
  host: "localhost",
  dialect: "mysql", // or 'mariadb', 'sqlite', 'postgres', 'mssql'
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL via Sequelize"))
  .catch((err) => console.error("Error:", err));
