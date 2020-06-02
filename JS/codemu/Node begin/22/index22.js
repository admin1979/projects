"use strict";

let fs = require("fs");
let http = require("http");

console.log("start");


http.createServer(function (req, res) {
  if (req.url != "/favicon.ico") {
    getPage(req.url, res);
  }
}).listen(8888);

function getPage(name, res, statusCode = 200) {
  if (name == '/') {
    name = 'index';
  }

  fs.readFile("pages/" + name + ".html", (err, data) => {
    if (!err) {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = statusCode;
      res.write(data);
      res.end();
    } else {
      if (statusCode != 404) {
        getPage('404', res, 404);
      } else {
        throw err;
      }
    }
  });
}

//22.лучшим роутинг на NodeJS    