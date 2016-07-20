const fs = require('fs');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err);
    }

    const files = list
      .filter((item) => item.endsWith('.' + extension));
    callback(null, files);
  });
}
