'use strict';

var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('The most important thing is the thing most easily forgotten');
};
var server = http.createServer(handleRequest);

server.listen(process.env.PORT || 8080);
