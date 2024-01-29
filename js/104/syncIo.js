//import fs from 'fs';
'use strict';
const fs = require('fs');

const fileContents = fs.readFileSync(process.argv[2], 'utf-8');
//console.log(fileContents/*.toString()*/);
const newLines = fileContents.split('\n').length;
console.log(newLines - 1);

console.log('file end');
