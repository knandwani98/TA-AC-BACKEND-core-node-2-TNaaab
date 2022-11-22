const http = require("http");

const server = http.createServer(handleServer);

function handleServer(req, res) {
  var store = "";
  req.on("data", (chunks) => {
    store += chunks;
  });
  req.on("end", () => {
    res.write(store);
    res.end();
  });
}

server.listen(3456, console.log);
