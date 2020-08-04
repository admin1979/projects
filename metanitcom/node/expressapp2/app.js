// Глава 4. Express
// Отправка ответа

/* const express = require("express");
const app = express();

app.use(function (request, response) {
    response.send(`<!DOCTYPE html>
  <html>
  <head>
      <title>Главная</title>
      <meta charset="utf-8" />
  </head>
  <body>
      <h1>Главная страница</h1>
      <h3>Привет, Express</h3>
  </body>
  <html>`);
});

app.listen(3000); */

const express = require("express");
const app = express();

app.use(function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000);