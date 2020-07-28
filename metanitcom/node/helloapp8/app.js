// Глава 2. Основы работы с Node.js
// Работа с файлами

const fs = require("fs");

fs.appendFile("hello1.txt", "Привет МИД!", function (error) {
    if (error) throw error; // если возникла ошибка

    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data); // выводим считанные данные
});