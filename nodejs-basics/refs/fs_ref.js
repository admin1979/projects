const fs = require('fs');
const path = require('path');

// File System
fs.mkdir(path.join(__dirname, 'notes'),err => {
    if (err) throw new Error(err)

    console.log('Папка было создана')
});