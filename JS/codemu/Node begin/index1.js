"use strict";

let fs = require("fs");

/* fs.readFile('folder/readme.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('!!!'); 

fs.writeFile("folder/readme.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

let abc =
  "Каждый приезд открывал мне новые потайные уголки волшебной России. Всякий раз я вновь оказывалась в удивительном мире приключений. Эта поездка в мае 1985 года не стала исключением.";

fs.writeFile("folder/greben.txt", abc, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});


let arr = ["1.txt", "2.txt", "3.js"];
for (let i = 0; i <= 2; i++) {
    fs.writeFile(arr[i], " ", (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}

*/

let arr = ["паша.txt", "маша.txt", "глаша.js"];
for (let elem of arr) {
    fs.writeFile('folder/' + elem, "Привет МИР!!!", (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}

// Чтение и запись файлов на NodeJS