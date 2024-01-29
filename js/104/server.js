//'use strict';

import http from 'http';
//const http = require('http');

console.log(process.argv);

http.createServer((req, res) => {
  //res.setHeader('content-type', 'text/html');
  //res.statusCode = 404;
  /*res.writeHead(404, {
    'content-type': 'text/html',
    'foo': 'bar'
  });

  //res.write('Hello World!!!');
  res.write('404 - no such page');*/

  const potus = {
    first: 'Joe',
    last: 'Biden'
  };

  res.setHeader('content-type', 'application/json');
  res.write(JSON.stringify(potus));
  res.end();
}).listen(80);
