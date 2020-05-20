'use strict';

let fs = require('fs');

//Перемещение файлов на NodeJS
fs.rename('readme.txt', 'folder/new.txt', err => {
    if (err) throw err;
});