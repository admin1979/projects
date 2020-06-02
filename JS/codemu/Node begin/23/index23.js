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

  fs.readFile('pages/' + name + '.html', 'utf-8', (err, data) => {
    if (!err) {

      fs.readFile('elems/menu.html', 'utf-8', (err, menu) => {
        if (err) throw err;

        data = data.replace(/\{\{menu\}\}/g, menu);

        fs.readFile('elems/footer.html', 'utf-8', (err, footer) => {
          if (err) throw err;

          data = data.replace(/\{\{footer\}\}/g, footer);

          res.setHeader('Content-Type', 'text/html');
          res.statusCode = statusCode;
          res.write(data);
          res.end();
        });


      });


    } else {
      if (statusCode != 404) {
        getPage('404', res, 404);
      } else {
        throw err;
      }
    }
  });
}

//23.Разрезаем сайт на элементы
//g для возможности дублирования меню 