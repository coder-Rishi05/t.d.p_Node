const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/" || req.url === "/index") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
  } else {
    filePath = path.join(__dirname, "404.html");
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading page.");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
