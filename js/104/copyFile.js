const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2], 'utf-8');
const writeStream = fs.createWriteStream(process.argv[3], 'utf8');


readStream.on('data', data => writeStream.write(data));
readStream.on('error', err => console.error(err));
readStream.on('end', () => {
  writeStream.end();
  console.log('read stream finished');
});



writeStream.on('error', err => console.error('OOPS', err));
writeStream.on('finish', () => console.log('write stream finished'));

console.log('file end');
