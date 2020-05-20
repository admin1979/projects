'use strict';

let fs = require('fs');

//7 Копирование файлов на NodeJS

//Дан файл test.txt, в тексте которого находится число. Сделайте 2 копии этого файла. Откройте первую копию и возведите находящееся в тексте файла число в квадрат. Запишите новое число обратно в файл.

fs.copyFile('test.txt', 'folder/test.txt', (err) => {
    if (err) throw err;
    console.log('скопировано');
});

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) throw err;

    let result = data * data;

    fs.writeFile("test.txt", result, (err) => {
        if (err) throw err;

        console.log("сделано!");

        fs.writeFile("folder/test.txt", result, (err) => {
            if (err) throw err;

            console.log("сделано1!");
        });
    });
});