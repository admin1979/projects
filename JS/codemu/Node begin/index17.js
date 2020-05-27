/* let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);

        if (req.url == '/index') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<b>Page Index</b>');
            res.end();
        }

        if (req.url == '/about') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<b>Page About</b>');
            res.end();
        }

        if (req.url == '/contacts') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<b><i>Page Contacts</i></b>');
            res.end();
        }
    }
}).listen(8888); */


/* 
let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);

        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8'
        });

        if (req.url == '/index') {
            res.write('<b>Page Index</b>');
        }

        if (req.url == '/about') {
            res.write('<b>Page About</b>');
        }

        if (req.url == '/contacts') {
            res.write('<b><i>Страница контактов</i></b>');
        }

        res.end();
    }

}).listen(8888); */


let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);

        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8'
        });

        if (req.url == '/page1') {
            res.write('<h2>первая страница</h2>');
        }

        if (req.url == '/page2') {
            res.write('<h2>вторая страница</h2>');
        }

        if (req.url == '/page3') {
            res.write('<h2><i>третья страница</i><h2>');
        }

        res.end();
    }

}).listen(8888);