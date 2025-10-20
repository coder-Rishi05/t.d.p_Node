const createServer = require("node:http");

const hostname = "127.0.0.1";
const port = 8080;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("assignment/index.html");
// });

var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
