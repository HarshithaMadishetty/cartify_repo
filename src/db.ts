import mysql from "mysql2";
import { Connection } from "mysql2";

const db:Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cartify"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

export default db;