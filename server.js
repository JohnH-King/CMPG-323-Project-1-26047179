const http = require('http');
const app = require('./app');
var fs = require('fs');


const host = '0.0.0.0';
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
console.log("Listening on Port 5000");
});
