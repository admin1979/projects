const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('<h1>Hello from NodeJS</h1>');
    res.write('<h2>Hello from NodeJS</h2>');
    res.write('<h3>Hello from NodeJS</h3>');
    res.end(`<div style = "background: grey; width: 200px; height: 200px; border-radius: 25px;">
        <h2>Test 1</h2>
    </div>
    `);
});

server.listen(3000, () => {
    console.log('Server is running...');
});

