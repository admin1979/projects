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


let arr = ["паша.txt", "маша.txt", "глаша.js"];
for (let elem of arr) {
    fs.writeFile('folder/' + elem, "Привет МИР!!!", (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}

// Чтение и запись файлов на NodeJS

fs.writeFile("readme.txt", "10", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
}); //создаём файл

fs.readFile("folder/readme.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let result = data * data + "! ту туру ту ту";

  fs.writeFile("folder/readme.txt", result, (err) => {
    if (err) throw err;

    console.log("done сделано");
  });
});


fs.readFile("folder/readme.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let digits = data.split("");

  for (let elem of digits) {
    fs.writeFile("folder/" + elem + ".txt", elem * elem, (err) => {
      if (err) throw err;

      console.log("done сделано");
    });
  }
}); //чтение и запись новых файлов


fs.readFile("folder/folder1/document1.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let result = data;

  fs.writeFile("folder/folder1/document2.txt", result, (err) => {
    if (err) throw err;

    console.log("сделано!");
  });
}); //Даны два файла. Прочитайте текст из первого файла и запишите его во второй.

fs.readFile("folder/folder1/document3.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let result = data + ",на встречу ему Волк";

  fs.writeFile("folder/folder1/document3.txt", result, (err) => {
    if (err) throw err;

    console.log("сделано!");
  });
}); //Дан файл с текстом. Запишите ему в конец еще какой-нибудь текст.


fs.readFile("folder/folder1/document4.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let result = Math.pow(data, 3);

  fs.writeFile("folder/folder1/document4.txt", result, (err) => {
    if (err) throw err;

    console.log("done сделано");
  });
}); //Дан файл, текстом которого является число. Прочитайте этот файл, вычислите квадрат(или куб) этого числа и запишите этот квадрат обратно в файл.

//Дан файл, текстом которого является строка из чисел, разделенных запятыми. Прочитайте этот файл, вычислите среднее арифметическое этих чисел и запишите результат в новый файл
fs.readFile("folder/folder1/document5.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let digits = data.split(" ");

  for (let elem of digits) {
    fs.writeFile("folder/folder1/" + elem + ".txt", elem + elem / 5, (err) => {
      if (err) throw err;

      console.log("done сделано");
    });
  }
});

fs.readFile("folder/folder1/document5.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let digits = data.split("");

  for (let elem of digits) {
    fs.writeFile("folder/folder1/" + "arith.txt", elem + elem / 5, (err) => {
      if (err) throw err;

      console.log("done сделано");
    });
  }
});

*/

fs.readFile("folder/folder1/document5.txt", "utf-8", (err, data) => {
  if (err) throw err;

  let digits = data.split("");

  for (let elem of digits) {
    fs.writeFile(
      "folder/folder1/" + "arith.txt",
      elem + elem / digits.length,
      (err) => {
        if (err) throw err;

        console.log("done сделано");
      }
    );
  }
}); //Последний вариант
