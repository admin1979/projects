'use strict'

let fs = require('fs');
//9.Очистка файла

/* fs.truncate('readme.txt', 1, err => {
    if (err) throw err;
    console.log('файл очищен');
}); */

let i = 1;
setInterval(function () {
    fs.writeFile("readme.txt", i++, (err) => {
        if (err) throw err;
        console.log("счётчик пишет в файл");
    });
    console.log(i++);
    if (i > 10) {
        fs.truncate('readme.txt', err => {
            if (err) throw err;
            console.log('файл очищен');
        });
    } else {
        clearInterval(); // не получилось остановить

    }
}, 1000);