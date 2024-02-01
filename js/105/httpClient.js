/*(async () => {
  const response = await fetch(process.argv[2]);
  const text = await response.text();
  console.log(text);
})();*/

'use strict';

const http = require('http');
http.get(process.argv[2], response => {
  response.setEncoding('utf-8');
  response.on('data', console.log); //data => console.log(data/*.toString()*/));
  response.on('error', err => console.error('oops', err));
}).on('error', err => console.error('oops2', err));
