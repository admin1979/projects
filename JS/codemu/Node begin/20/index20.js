'use strict';

let fs = require('fs');
let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        fs.readFile('pages/' + req.url + '.html', (err, data) => {
            res.setHeader('Content-Type', 'text/html'); //тут уже не нужна кодировка как в index18

            if (!err) {
                res.statusCode = 200;
                res.write(data);
                res.end();

            } else {
                fs.readFile('pages/404.html', (err, data) => {
                    if (err) throw err;

                    res.statusCode = 404;
                    res.write(data);
                    res.end();
                });
            }
            //res.end();
        });
    }
}).listen(8888);

//20.404 ошибка из файла на NodeJS