var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  fs.createReadStream(path.join(__dirname, 'readme.txt')).pipe(res);
}

server.listen(4444);
