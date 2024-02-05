const fs = require('fs');
const path = require('path');

// let exports = module.exports;
/*module.*/exports.filteredLs =
module.exports = function filteredLs(directory, extension, callback) {
  const ext = `.${extension}`;
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }
    callback(null, files.filter(f => path.extname(f) === ext));
  });
};
