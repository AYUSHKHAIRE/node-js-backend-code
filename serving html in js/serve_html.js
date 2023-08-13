const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('servefile.html')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fileContent)
server.listen(80, '192.168.121.1', () => {
        console.log("Listening on port 80");
    })})
