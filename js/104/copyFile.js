const fs = require('fs');

const readStream = fs.createReadStream(process.argv[2], 'utf-8');
const writeStream = fs.createWriteStream(process.argv[3], 'utf8');

readStream.on('error', err => console.error(err));

/*readStream.on('data', data => writeStream.write(data));
readStream.on('end', () => {
  writeStream.end();
  console.log('read stream finished');
});*/
readStream.pipe(writeStream);



writeStream.on('error', err => console.error('OOPS', err));
writeStream.on('finish', () => console.log('write stream finished'));

console.log('file end');
