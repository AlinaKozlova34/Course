const hhtp = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type')
    response.write('<h1> Hello there!</h1>');
    response.end();
});


server.listen(3000);