## BLOCK-writeCode

#### Path

Q. Suppose we have 3 files inside a directory on desktop
The structure is

- node(folder) - app.js - server.js - index.html
  You are currently inside server.js

Write code to

- capture absolute path of `server.js`(itself)
- get absolute path of `app.js`
- get realtive path of `index.html`
- get absolute path of `index.html` using `path module`

```js
// let path = require("path");
// const absPath = __dirname;

// console.log(absPath, " - abs-path");
// console.log(absPath + "/app.js", " - abs-path");
// console.log("./index.html");
// console.log(path.join(absPath, "index.html"));
```

#### Capture data on server

Q. Create a server using http

- handle post method on '/' route
- send json data on it from postman

```js
// data format is
{
  team: 'kxip',
  players: 18,
  captain: 'KL Rahul'
}
```

- capture data from request on server side using data and end event on request object
- when end event fires, send entire captured data in response with status code 201.

Q. Follow above steps with form data from postman instead of json data.

- once data has been captured, send only captain's name in response.

```js
// var http = require("http");
// var qs = require("querystring");

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   var store = "";
//   var dataFormat = req.headers["content-type"];
//   req.on("data", (chunk) => {
//     store += chunk;
//   });

//   req.on("end", () => {
//     if (req.method === "POST" && req.url === "/") {
//       res.statuscode = 201;
//       if (dataFormat === "application/json") {
//         res.setHeader("Content-Type", "application/json");
//         res.end(store);
//       } else if (dataFormat === "application/x-www-form-urlencoded") {
//         res.end(qs.parse(store).captain);
//       }
//     }
//   });
// }

// server.listen(4000, console.log);
```

Q. Create server which can handle both json/form data without specifying which format of data is being received.

- add listener on port 9000
- use `data/end` event to capture json/form data
- use `req.headers['Content-Type']` to check data format
- parse respective data format i.e. json/form
- send entire data in response
- data sent from postman should have fields:

  - city
  - state
  - country
  - pin

```js
// var http = require("http");
// var qs = require("querystring");

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   var store = "";
//   var dataFormat = req.headers["content-type"];
//   req.on("data", (chunk) => {
//     store += chunk;
//   });

//   req.on("end", () => {
//     if (dataFormat === "application/json") {
//       var parseData = JSON.stringify(store);
//       res.setHeader("Content-Type", dataFormat);
//       res.end(parseData);
//     } else if (dataFormat === "application/x-www-form-urlencoded") {
//       res.setHeader("Content-Type", dataFormat);
//       var parseData = JSON.stringify(qs.parse(store));
//       console.log(parseData);
//       res.end(parseData);
//     }
//   });
// }

// server.listen(9000, console.log);
```

Q. create server, send json data in request from postman, parse in on the server and send html response with entire parsed data information.

- format of json data is {name: your name, email: "", }
- Html response format is <h1>Name</h1><h2>email</h2>

```js
// var http = require("http");
// var qs = require("querystring");

// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   var store = "";
//   var dataFormat = req.headers["content-type"];
//   req.on("data", (chunk) => {
//     store += chunk;
//   });

//   req.on("end", () => {
//     if (dataFormat === "application/json") {
//       var parseData = JSON.parse(store);
//       res.setHeader("Content-Type", "text/html");
//       res.end(`
//             <h1>${parseData.name}</h1>
//             <h2>${parseData.email}</h2>
//           `);
//     }
//   });
// }

// server.listen(9000, console.log);
```

Q. Follow above question with form data containing fields i.e name and email.

- Parse form-data using `querystring` module
- respond with HTML page containing only email from data in H2 tag.

#### Note:-

Make sure to convert objects into strings using `JSON.stringify` before passing the data through response.

```

```

```

```

```

```
