'use strict';

let fs = require('fs');

//11.Работа с объектом Stats на NodeJS
/*
fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;

    console.log(stats);
});

fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;

    let result = stats;
    fs.writeFile('folder/bait2.js', result, (err) => {
        if (err) throw err;

        console.log("done сделано");
    });
});


fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;

    console.log(stats.isDirectory());
});



fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;

    console.log(stats.size);
});



fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats.size / 1024);
    console.log(stats.size / 1024 / 1024);
    console.log(stats.size / 1024 / 1024 / 1024);
});


fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;
    let kb = stats.size / 1024;
    let mb = stats.size / 1024;
    let gb = stats.size / 1024 / 1024 / 1024;

    console.log(kb);
    console.log(mb);
    console.log(gb);

    fs.writeFile('folder/megabait.txt', gb, (err) => {
        if (err) throw err;

        console.log("done сделано");
    });
});


fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;
    let kb = stats.size / 1024;
    let mb = stats.size / 1024;
    let gb = stats.size / 1024 / 1024 / 1024;

    let q = kb + mb + gb;



    console.log(kb);
    console.log(mb);
    console.log(gb);

    fs.writeFile('folder/summa.txt', q, (err) => {
        if (err) throw err;

        console.log("done сделано");
    });
});

 */

fs.stat('readme.txt', (err, stats) => {
    if (err) throw err;
    let kb = stats.size / 1024;
    let mb = stats.size / 1024 / 1024;
    let gb = stats.size / 1024 / 1024 / 1024;


    let q = kb + mb + gb;

    fs.writeFile('folder/summa.txt', q, (err) => {
        if (err) throw err;
        fs.writeFile('folder/kb.txt', kb, (err) => {
            if (err) throw err;
            fs.writeFile('folder/mb.txt', mb, (err) => {
                if (err) throw err;
                fs.writeFile('folder/gb.txt', gb, (err) => {
                    if (err) throw err;
                });
            });
        });
    });
});