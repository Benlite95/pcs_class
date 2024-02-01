'use strict';

const http = require('http');
/*http.get(process.argv[2], response => {
  let results = '';

  response.setEncoding('utf-8');
  response.on('data', data => results += data);
  response.on('error', err => console.error('oops', err));
  response.on('end', () => {
    console.log(results.length);
    console.log(results);
  });
}).on('error', err => console.error('oops2', err));*/

const bl = require('bl');

http.get(process.argv[2], response => {
  response.pipe(bl((err, data) => {
    if(err) {
      return console.error(err);
    }
    console.log(data.length);
    console.log(data.toString());
  }));
}).on('error', err => console.error('oops2', err));
