var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hi I am Subhajeet");
  res.end();
}).listen(6199);