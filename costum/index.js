//const http = require('http');
//const fs = require('fs');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//const home = fs.readFileSync('C:/Users/DELL/Desktop/folderking/THE  PROGRAMING/WEB  DEVELOPMENT/backend/costum/index.html')
//const about = fs.readFileSync('C:/Users/DELL/Desktop/folderking/THE  PROGRAMING/WEB  DEVELOPMENT/backend/costum/about.html')
//const services = fs.readFileSync('C:/Users/DELL/Desktop/folderking/THE  PROGRAMING/WEB  DEVELOPMENT/backend/costum/services.html')
//const contact = fs.readFileSync('C:/Users/DELL/Desktop/folderking/THE  PROGRAMING/WEB  DEVELOPMENT/backend/costum/contact.html')
//
//const server = http.createServer((req, res)=>{
//    console.log(req.url);
//
//    url = req.url;
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    if(url == '/'){
//        res.end(home);
//    }
//    else if(url == '/about'){
//        res.end(about);
//    }
//    else if(url == '/services'){
//        res.end(services);
//    }
//    else if(url == '/contact'){
//        res.end(contact);
//    }
//    else{
//        res.statusCode = 404;
//        res.end("<h1>404 not found</h1>");
//    }
//});
//
//server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//  });
//

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync(path.join(__dirname, 'costum', 'index.html'));
const about = fs.readFileSync(path.join(__dirname, 'costum', 'about.html'));
const services = fs.readFileSync(path.join(__dirname, 'costum', 'services.html'));
const contact = fs.readFileSync(path.join(__dirname, 'costum', 'contact.html'));

const server = http.createServer((req, res) => {
  console.log(req.url);

  const url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.end(home);
  } else if (url === '/about') {
    res.end(about);
  } else if (url === '/services') {
    res.end(services);
  } else if (url === '/contact') {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
