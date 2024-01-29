'use strict';
const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  // res.end('hello world');
  // console.log(req.headers.host);
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(`[${url.pathname}]`);
  //console.log(url.searchParams);
  //console.log(url.searchParams.get('name'), url.searchParams.get('popularity'));

  //res.writeHead(200, { 'content-type': 'text/html' });
  res.setHeader('content-type', 'text/html');
  switch (/*req.url*/url.pathname) {
    case '/':
      res.writeHead(301, { 'location': '/index.html' });
      break;
    case '/index.html':
      res.write('<h1>Welcome to PCS</h1>');
      break;
    case '/aboutus.html':
      res.write('<h2>PCS is a great place</h2>');
      break;
    case '/greet':
      res.write(`<h5>Hello ${url.searchParams.get('name') }</h5>`);
      res.write(`<h5>Your currently polling at ${url.searchParams.get('popularity')}</h5>`);
      break;
    default:
      res.statusCode = 404;
      res.write('<h2>No such page. 404</h2>');
      break;
  }

  res.end();
}).listen(80);
