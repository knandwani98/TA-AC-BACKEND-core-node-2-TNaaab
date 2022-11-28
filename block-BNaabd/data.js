var http = require("http");
var qs = require("querystring");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  var store = "";
  const dataFormat = req.headers["content-type"];
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      var parseData = JSON.parse(store);
      res.setHeader("Content-Type", dataFormat);
      res.end(JSON.stringify(parseData));
    } else if (dataFormat === "application/x-www-form-urlencoded") {
      var parseData = qs.parse(store);
      res.setHeader("Content-Type", dataFormat);
      res.end(JSON.stringify(parseData));
    }
  });
}

server.listen(7000, () => {
  console.log("Listening to port 7000");
});
