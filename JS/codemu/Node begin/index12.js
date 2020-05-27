'use strict';

let fs = require('fs');

//12.Отделяем файлы от папок на NodeJS

let folderName = 'folder777';

fs.readdir(folderName, (err, files) => {
    if (err) throw err;
    console.log(files);

    for (let file of files) {
        fs.stat(folderName + '/' + file, (err, stats) => {
            if (err) throw err;

            if (!stats.isDirectory()) {
                console.log(file);
            }
        });
    }
});