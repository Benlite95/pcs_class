const fs = require('fs');

const writeStream = fs.createWriteStream(process.argv[2], 'utf8');

writeStream.write('hello world!');

writeStream.end();

writeStream.on('error', err => console.error(err));
writeStream.on('finish', () => console.log('finished'));

console.log('file end');
