var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url = require('url');
const path = require('path');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  var store = '';
  var userDir = __dirname + '/users/';

  var dataFormat = req.headers['content-type'];

  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    var parsedUrl = url.parse(req.url);
    var pathName = parsedUrl.pathname;
    if (pathName === '/users') {
      if (req.method === 'POST' && dataFormat === 'application/json') {
        var username = JSON.parse(store).username;
        fs.open(userDir + username + '.json', 'wx', (err, fd) => {
          fs.writeFile(fd, store, (err) => {
            fs.close(fd, (err) => {
              res.end(`${username} successfully created`);
            });
          });
        });
      } else if (req.method === 'GET') {
        var parseData = qs.parse(parsedUrl.query);
        var filePath = path.join(
          __dirname,
          'users',
          parseData.username + '.json'
        );

        fs.readFile(filePath, (err, cont) => {
          res.end(cont);
        });
      } else if (req.method === 'PUT') {
      }
    }
  });
}

server.listen(5678, () => {
  console.log('Listening to port 5678');
});
