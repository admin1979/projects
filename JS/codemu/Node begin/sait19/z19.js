'use strict';

let fs = require('fs');
let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        fs.readFile('pages1/' + req.url + '.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html');

            if (req.url == 'pages1/page1' + '.html') {
                res.statusCode = 200;
                res.write(data);
            } else if (req.url == 'pages1/page2' + '.html') {
                res.statusCode = 200;
                res.write(data);
            } else if (req.url == 'pages1/page3' + '.html') {
                res.statusCode = 200;
                res.write(data);
            } else {
                res.statusCode = 404;
                res.write('<b>Page not found</b>');
            }


            res.end();
        });
    }
}).listen(8888); //Задача из 19 не работает