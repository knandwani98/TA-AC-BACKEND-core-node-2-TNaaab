var http = require("http");
var qs = require("querystring");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  var store = "";
  var dataFormat = req.headers["content-type"];
  req.on("data", (chunk) => {
    store += chunk;
  });

  req.on("end", () => {
    if (dataFormat === "application/json") {
      var parseData = JSON.parse(store);
      res.setHeader("Content-Type", "text/html");
      res.end(`
            <h1>${parseData.name}</h1>
            <h2>${parseData.email}</h2>
          `);
    } else if (dataFormat === "application/x-www-form-urlencoded") {
      var parseData = qs.parse(store);
      console.log(parseData);
      res.setHeader("Content-Type", "text/html");
      res.end(`
              <h2>${parseData.email}</h2>
            `);
    }
  });
}

server.listen(9000, console.log);
