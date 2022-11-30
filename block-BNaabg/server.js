var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleServer);
var userDir = __dirname + '/users/';

function handleServer(req, res) {
  var parsedUrl = url.parse(req.url);
  var store = '';

  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    // All routes
    if (parsedUrl.pathname === '/users') {
      //////////////////////////// Create User

      if (req.method === 'POST') {
        var username = JSON.parse(store).username;

        fs.open(userDir + username + '.json', 'wx', (err, fd) => {
          if (err) return console.log(err);
          fs.writeFile(fd, store, (err) => {
            if (err) return console.log(err);
            fs.close(fd, (err) => {
              if (err) return console.log(err);
              return res.end(`${username} successfully created`);
            });
          });
        });
      }

      //////////////////// Getting User
      else if (req.method === 'GET') {
        var username = url.parse(req.url, true).query.username;
        fs.readFile(userDir + username + '.json', (err, content) => {
          if (err) return console.log(err);
          return res.end(content);
        });
      }

      /////////////////////////// Editing User
      else if (req.method === 'PUT') {
        var username = url.parse(req.url, true).query.username;
        fs.open(userDir + username + '.json', 'r+', (err, fd) => {
          if (err) return console.log(err);
          fs.ftruncate(fd, (err) => {
            if (err) return console.log(err);
            fs.writeFile(fd, store, (err) => {
              if (err) return console.log(err);
              fs.close(fd, (err) => {
                if (err) return console.log(err);
                return res.end(`${username} successfully editted`);
              });
            });
          });
        });
      }

      ////////////////////////// Delete User
      else if (req.method === 'DELETE') {
        var username = url.parse(req.url, true).query.username;
        fs.unlink(userDir + username + '.json', (err) => {
          if (err) return console.log(err);
          return res.end(`${username} successfully deleted`);
        });
      }
    } else {
      res.statusCode = 404;
      res.end(`Page Not Found`);
    }
  });
}

server.listen(5678, () => {
  console.log('Listening to port 5678');
});
