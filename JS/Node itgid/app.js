let express = require("express");
let app = express();
app.use(express.static("public"));
app.set("view engine", "pug");

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

// app.get("/", function (req, res) {
//   res.render('main');
// });

let qwe = 15;

app.get('/', function (req, res) {
  res.render('main', {
    title: 'Hey',
    message: 'Hello there!',
    sum: 2 + 8,
    asd: qwe
  });
});

app.get("/cat", function (req, res) {
  res.render("cat");
});

// Следующее по порядку видео => 8. УСТАНОВКА И НАСТРОЙКА БАЗЫ ДАННЫХ MYSQL. ОСНОВЫ РАБОТЫ С MYSQL WORKBENCH. СОЗДАЕМ И ЗАПОЛНЯЕМ ТАБЛИЦУ ТОВАРОВ И КАТЕГОРИЙ