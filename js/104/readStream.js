const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2], 'utf-8');

//setTimeout(() => {
  let chunks = 0;
  readStream.on('data', data => {
    console.log(`read chunk #${++chunks} ==========> ${data}`);
  });
  readStream.on('error', err => console.error(err));
  readStream.on('end', () => console.log('finished'));
//}, 1000);

console.log('file end');
