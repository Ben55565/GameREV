const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("./dataBase.json", "utf8", (err, data) => {
    if (err) console.log("error!");
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});
app.listen(8000);
