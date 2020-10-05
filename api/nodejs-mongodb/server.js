const http = require('http');
const app = require('./app');
var fs = require('fs');


const host = '0.0.0.0';
const port = process.env.PORT || 5000;

const server = http.createServer(function(req, res) {
  fs.readFile('hindex.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  });
});

server.listen(port, () => {
console.log("Listening on Port 5000");
});
