/*const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if(err) {
    return console.error(err);
  }
  const newLines = data.split('\n').length;
  console.log(newLines - 1);
});

// console.log('file end');*/

/*const fs = require('fs/promises');
fs.readFile(process.argv[2], 'utf-8')
  .then(data => console.log(data.split('\n').length - 1))
  .catch(err => console.error(err));*/

//import fs from 'fs/promises';
const fs = require('fs/promises');
(async () => {
  try {
    const data = await fs.readFile(process.argv[2], 'utf-8');
    console.log(data.split('\n').length - 1);
  }
  catch(err) {
    console.error(err);
  }
})();
