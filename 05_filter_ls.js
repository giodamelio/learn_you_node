const fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  console.log(list
    .filter((item) => item.endsWith('.' + process.argv[3]))
    .join('\n')
  )
});
