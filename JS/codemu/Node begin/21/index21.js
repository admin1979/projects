"use strict";

let fs = require("fs");
let http = require("http");

console.log("start");

http
  .createServer(function (req, res) {
    if (req.url != "/favicon.ico") {
      let name;
      if (req.url == "/") {
        name = "index";
      } else {
        name = req.url;
      }
      console.log(name);
      fs.readFile("pages/" + name + ".html", (err, data) => {
        res.setHeader("Content-Type", "text/html"); //тут уже не нужна кодировка как в index18

        if (!err) {
          res.statusCode = 200;
          res.write(data);
          res.end();
        } else {
          fs.readFile("pages/404.html", (err, data) => {
            if (err) throw err;

            res.statusCode = 404;
            res.write(data);
            res.end();
          });
        }
        //res.end();
      });
    }
  })
  .listen(8888);

//21.Меню сайта на NodeJS
