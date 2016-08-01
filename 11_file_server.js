const http = require('http');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.log('Usage node 11_file_server.js 3002 test.txt')
  process.exit(1);
}

const server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  const fileStream = fs.createReadStream(process.argv[3]);
  fileStream.pipe(response);
});

const port = process.argv[2];
server.listen(port);
console.log(`Server listening at http://localhost:${port}`);
