'use strict';

const http = require('http');
//const fs = require('fs/promises');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css'
};

http.createServer(async (req, res) => {
  console.log(req.url);
  console.log(path.extname(req.url));

  const mimeType = mimeTypes[path.extname(req.url)] || mimeTypes['.html'];
  res.setHeader('content-type', mimeType);

  if (req.url === '/') {
    res.writeHead(301, {
      location: '/index.html'
    });
    return res.end();
  }

  /*try {
    const data = await fs.readFile(`./public${req.url}`);
    res.end(data);
  } catch(err) {
    switch(err.code) {
      case 'ENOENT':
        res.statusCode = 404;
        res.end(`<h5>404. Page not found - ${req.url}</h5>`);
        break;
      default:
        res.statusCode = 500;
        res.end(`<h5>Failed to load page - ${req.url}</h5>`);
    }
  }*/

  const readStream = fs.createReadStream(`./public${req.url}`);
  // readStream.on('data', data => res.write(data));
  // readStream.on('end', () => res.end());
  readStream.pipe(res);
  
  readStream.on('error', err => {
    switch (err.code) {
      case 'ENOENT':
        res.statusCode = 404;
        res.end(`<h5>404. Page not found - ${req.url}</h5>`);
        break;
      default:
        res.statusCode = 500;
        res.end(`<h5>Failed to load page - ${req.url}</h5>`);
    }
  });
}).listen(80);
