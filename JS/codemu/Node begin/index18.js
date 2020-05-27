/* let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);

        res.writeHead(200, {
            'Content-Type': 'text/html;charset=UTF-8'
        });

        if (req.url == '/page1') {
            res.write('<h2>первая страница</h2>');
        } else if (req.url == '/page2') {
            res.write('<h2>вторая страница</h2>');
        } else if (req.url == '/page3') {
            res.write('<h2><i>третья страница</i><h2>');
        } else {
            res.write('<b>Page not found</b>');
        }

        res.end();
    }

}).listen(8888); */

/* let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);



        if (req.url == '/page1') {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=UTF-8'
            });
            res.write('<h2>первая страница</h2>');
        } else if (req.url == '/page2') {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=UTF-8'
            });
            res.write('<h2>вторая страница</h2>');
        } else if (req.url == '/page3') {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=UTF-8'
            });
            res.write('<h2><i>третья страница</i><h2>');
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/html;charset=UTF-8'
            });
            res.write('<b>Page not found</b>');
        }

        res.end();
    }

}).listen(8888); */


/* let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);

        res.setHeader('Content-Type', 'text/html;charset=UTF-8');

        if (req.url == '/page1') {
            res.statusCode = 200;
            res.write('<h2>первая страница</h2>');
        } else if (req.url == '/page2') {
            res.statusCode = 200;
            res.write('<h2>вторая страница</h2>');
        } else if (req.url == '/page3') {
            res.statusCode = 200;
            res.write('<h2><i>третья страница</i><h2>');
        } else {
            res.statusCode = 404;
            res.write('<b>Page not found</b>');
        }

        res.end();
    }

}).listen(8888); */


let http = require('http');

console.log('start');

http.createServer(function (req, res) {
    if (req.url != '/favicon.ico') {

        //console.log(req.url);

        res.setHeader('Content-Type', 'text/html;charset=UTF-8');
        //let stacode = 200;

        if (req.url == '/page1') {
            res.write('<h2>первая страница</h2>');
        } else if (req.url == '/page2') {
            res.write('<h2>вторая страница</h2>');
        } else if (req.url == '/page3') {
            res.write('<h2><i>третья страница</i><h2>');
        } else {
            res.statusCode = 404;
            res.write('<b>Page not found</b>');
        }
        res.statusCode = 200;
        res.end();
    }

}).listen(8888);


//Страница 404 на NodeJS