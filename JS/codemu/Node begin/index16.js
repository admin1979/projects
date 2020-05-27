'use strict';

//16.Убираем фавикон на NodeJS 

let http = require('http');

console.log('start');

http.createServer(function (req, res) {

    if (req.url != '/favicon.ico') {
        console.log(req.url);

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<b>Hello World!</b>');
        res.end('<h2>no end</h2>');
    }


}).listen(8888);