'use strict';

let fs = require('fs');

//13.Рекурсивный обход файлов папки на NodeJS

/* getAllFiles('testfolder');

function getAllFiles(folderName) {
    fs.readdir(folderName, (err, files) => {
        if (err) throw err;


        for (let file of files) {
            fs.stat(folderName + '/' + file, (err, stats) => {
                if (err) throw err;

                if (!stats.isDirectory()) {
                    console.log(file);
                } else {
                    getAllFiles(folderName + '/' + file)
                }
            });
        }
    });
} // ни фига не понял, разобрать потом. */

getAllFiles('folder');

function getAllFiles(folderName) {
    fs.readdir(folderName, (err, files) => {
        if (err) throw err;

        for (let file of files) {
            fs.stat(folderName + '/' + file, (err, stats) => {
                if (err) throw err;

                if (!stats.isDirectory()) {
                    console.log(file);
                } else {
                    getAllFiles(folderName + '/' + file)
                }
            });
        }
    });
}