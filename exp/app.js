// Глава 4. Express
// Представления и движок представлений Handlebars

const express = require("express");

const app = express();

app.use(express.static('public'));

app.set("view engine", "hbs");

app.use("/contact", function (request, response) {
  response.render("contact.hbs");
});

app.use("/about", function (request, response) {
  response.render("about.hbs");
});



app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3000);