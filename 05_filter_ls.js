const fs = require('fs');

const filter_ls = require('./06_make_it_modular');

filter_ls(process.argv[2], process.argv[3], function(err, list) {
  console.log(list.join('\n'));
});
