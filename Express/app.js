const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3000;

app.listen(port, (err) => {
  console.log(`My app is running at : localhost:${port} `);
  if (err) {
    throw err;
  }
});
