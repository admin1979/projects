'use strict';

var http = require('http');
// Определяем порт, на котором будет работать сервер.
// Порт не должен быть занят или закрыт в файрволле!
var port = 8888;

// Определяем параметры ответа на запросы к серверу
http.createServer(function (req, res) {
    // Устанавливаем заголовки ответа сервера
    //console.log(req.url); //favicon
    //console.log(req.method); //GET
    console.log(req.headers.host);
    res.writeHead(200, {
        'Content-Type': 'text/html', // Заголовок: тип документа
        'Custom-Header': 'Hello user!' // Кастомный заголовок
    });

    res.write('<i><b>Hello Node!</b></i>'); //(Добавил что-то своё...............)
    res.write(' !!!'); //(Добавил что-то своё...............)

    // Прекращаем процесс ответа и отсылаем данные (строку)
    res.end('<h1>Hello world!</h1>');
}).listen(port);

console.log('Node сервер запущен на localhost:' + port + '. Нажмите Ctrl+C для остановки сервера.')