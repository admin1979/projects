const fs = require('fs');
const path = require('path');

// File System
// fs.mkdir(path.join(__dirname, 'notes'),err => {
//     if (err) throw new Error(err)

//     console.log('Папка было создана')
// });

// fs.writeFile(
//     path.join (__dirname, 'notes', 'mynotes.txt'),
//     'Hello World!',
//     (err) => {
//         if (err) throw err
//         console.log("Файл был создан");

//         fs.appendFile(path.join (__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//             err => {
//                 if (err) throw err
//                 console.log("Файл был изменён");

//                 fs.readFile(
//                     path.join (__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if(err) throw err
//                         console.log(data);
//                     }
//                 );

//                 }
//             );
//         }
//     );

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err

        console.log('Файл переименован');
    }
);

  