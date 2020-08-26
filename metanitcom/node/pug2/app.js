// Глава 4. Express
// Layout


const express = require("express");

const app = express();

app.set("view engine", "pug");

app.use("/contact", function (request, response) {

    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});

app.use("/test", function (request, response) {

    response.send("Проверочная страница");
});


app.use("/", function (request, response) {

    response.send("Главная страница аааа");
});



app.listen(3000);