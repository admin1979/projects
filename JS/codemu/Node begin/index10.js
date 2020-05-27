"use strict";

let fs = require("fs");

//Создание, удаление и чтение папок на NodeJS

/* fs.mkdir('folder777/test', err => {
    if (err) throw err;
});

fs.rmdir('folder777/test', err => {
    if (err) throw err;
}); 

fs.readdir('folder777', (err, files) => {
    if (err) throw err;
    console.log(files);
});
//Дан массив с названиями папок. Переберите его циклом и создайте соответствующие папки.

let arr = ['folder11', 'folder12', 'folder13'];
for (let elem of arr) {
    fs.mkdir('folder888/' + elem, err => {
        if (err) throw err;
    });
}


//Удалите какую-нибудь папку.
fs.rmdir("qwerty", (err) => {
  if (err) throw err;
});


//Дана папка с файлами. Прочитайте ее содержимое и выведите имена всех файлов из этой папки в консоль.

fs.readdir("folder", (err, files) => {
  if (err) throw err;
  console.log(files);
}); //не все файлы выводит почему-то

//Дана папка с файлами. Получите названия всех файлов из этой папки, переберите их циклом и удалите эти файлы.

fs.readdir("folder2", (err, files) => {
    if (err) throw err;
    console.log(files);
    for (let elem of files) {
        console.log(elem);
        fs.unlink(elem, (err) => {
            if (err) throw err;
            console.log('was deleted');
        });
    }
});
*/


fs.readdir("folder2", (err, files) => {
    if (err) throw err;
    //console.log(files);
    for (let elem of files) {
        //console.log(elem);
        fs.unlink(elem, (err) => {
            if (err) throw err;
            //console.log('path/file.txt was deleted');
        });
    }
}); // Не получается почему-то

// fs.unlink(elem, (err) => {
//     if (err) throw err;
//     console.log('path/file.txt was deleted');
// });