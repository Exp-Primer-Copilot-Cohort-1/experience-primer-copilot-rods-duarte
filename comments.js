// Create web server
// Create a web server that listens on port 3000. When a request is made to the server, it should respond with the content of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});