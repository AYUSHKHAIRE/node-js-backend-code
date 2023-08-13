// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .cont{
              display: grid;
              grid-gap: 1rem;
              grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
              /*justify-content: center;
              align-items: center;*/
          }
          .box{
              border: 2px solid black;
              background-color: rgb(173, 173, 255);
              padding: 23px;
  
          }
      </style>
  </head>
  <body>
      <div class="cont">
          <div class="box">box-1</div>
          <div class="box">box-2</div>
          <div class="box">box-3</div>
          <div class="box">box-4</div>
          <div class="box">box-5</div>
          <div class="box">box-6</div>
          <div class="box">box-7</div>
          <div class="box">box-8</div>
          <div class="box">box-9</div>
          <div class="box">box-10</div>
          <div class="box">box-11</div>
          <div class="box">box-12</div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});