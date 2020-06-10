"use strict";

let fs = require("fs");
let http = require("http");

console.log("start");
http
  .createServer(function (req, res) {
    if (req.url != "/favicon.ico") {
      if (req.url.startsWith("/public/")) {
        let filePath = req.url.substr(1);
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.statusCode = 404;
            res.end("Not Found");
          } else {
            let match = filePath.match(/\.(js|css)$/);

            if (match) {
              res.setHeader("Content-Type", "text/" + match[1]);
            } else if ((match = filePath.match(/\.(jpg|png)$/))) {
              res.setHeader("Content-Type", "image/" + match[1]);
            }

            res.end(data);
          }
          return;
        });
      } else {
        getPage(req.url, res);
      }
    }
  })
  .listen(8888);

function getPage(name, res, statusCode = 200) {
  if (name == "/") {
    name = "index";
  }




  fs.readFile("pages/" + name + ".html", "utf-8", (err, content) => {
    if (!err) {

      fs.readFile("layouts/default.html", "utf-8", (err, layout) => {
        if (err) throw err;

        layout = layout.replace(/\{\{get content\}\}/g, content);

        let title = content.match(/\{\{set title "(.*?)"\}\}/);
        if (title) {
          layout = layout.replace(/\{\{get title\}\}/g, title[1]);

          layout = layout.replace(/\{\{set title ".*?"\}\}/, '');
        }

        fs.readFile("elems/menu.html", "utf-8", (err, menu) => {
          if (err) throw err;

          layout = layout.replace(/\{\{get menu\}\}/g, menu);

          fs.readFile('elems/footer.html', 'utf-8', (err, footer) => {
            if (err) throw err;

            layout = layout.replace(/\{\{get footer\}\}/g, footer);

            res.setHeader("Content-Type", "text/html");
            res.statusCode = statusCode;
            res.write(layout);
            res.end();
          });
        });
      });
    } else {
      if (statusCode != 404) {
        getPage("404", res, 404);
      } else {
        throw err;
      }
    }
  });
}

//30.