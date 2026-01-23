const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});

app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});

/**
 * GET /odin/messages?sort=date&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: "date", direction: "ascending" }
 *
 * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: ["date", "likes"], direction: "ascending" }
 */
app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
});


const port = 3000;

app.listen(port, (err) => {
  console.log(`My app is running at : localhost:${port} `);
  if (err) {
    throw err;
  }
});
