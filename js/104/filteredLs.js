'use strict';
const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, data) => {
  if (err) {
    return console.error(err);
  }

  const ext = `.${process.argv[3]}`;
  //console.log(data);
  data.forEach(f => {
    /*if (f.endsWith(process.argv[3])) {
      console.log(f);
    }*/
    //console.log(path.extname(f));
    if (path.extname(f) === ext) {
      console.log(f);
    }
  });

  data.filter(f => path.extname(f) === ext)
    .forEach(f => console.log(f));
});
