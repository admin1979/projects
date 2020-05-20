'use strict';

let fs = require('fs');

//8.Удаление файлов на NodeJS

//Дан файл file.txt. Удалите его.
/* fs.unlink('folder/file.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
}); */

//Дан массив с именами файлов. Переберите циклом эти имена и удалите соответствующие файлы из папки.

let arr = ['oleg.txt', 'alex.txt', 'glasha.txt'];
for (let elem of arr) {
    //console.log(elem);
    if (elem === 'alex.txt') {
        fs.unlink('folder/alex.txt', (err) => {
            if (err) throw err;
            console.log('path/file.txt was deleted');
        });
    } else {
        console.log('файл был только что, но уже удалён');
    }
}