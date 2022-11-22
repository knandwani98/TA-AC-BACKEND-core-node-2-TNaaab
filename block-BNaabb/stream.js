const http = require("http");

const server = http.createServer(handleServer);

function handleServer(req, res) {
  var store = "";
  req.on("data", (chunks) => {
    store = store + chunks;
  });
  req.on("end", () => {
    console.log(store);
  });
  res.setHeader("Content-Type", "text/json");
  res.write(store);
  res.end();
}

server.listen(3456, console.log);
