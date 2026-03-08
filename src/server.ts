import express from "express";
import db from "./db.js";

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {

  const query = "SELECT * FROM products";

  db.query(query, (err, result) => {

    if (err) {
      res.status(500).json(err);
      return;
    }

    res.json(result);
  });

});

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});