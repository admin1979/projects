// Глава 3. Сервер
// Шаблоны

const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {

    fs.readFile("index.html", "utf8", function (error, data) {

        let message = "Изучаем Node.js (занимаюсь спортом я)";
        let header = "Главная страница (всем фак)";
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data);
    })
}).listen(3000);