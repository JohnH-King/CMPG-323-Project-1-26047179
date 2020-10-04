var http = require('http');
var fs= require('fs');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  fs.readfile('./index.html', null, function(error, data) {
    if (error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {response.write(data);}
    response.end();
  });
  response.end();
}

http.createServer(onRequest).listen(8000);
