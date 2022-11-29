var http = require("http");
var fs = require("fs");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  const store = "";
  req.on("data", (chunks) => {
    store += chunks;
  });

  req.on("end ", () => {
    res.setHeader("Content-Tyoe", "text/html");
    fs.createReadStream("./form.html").pipe(res);
  });
}

server.listen(5678, () => {
  console.log("Listening to port 5678");
});
