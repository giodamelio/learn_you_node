const http = require('http');

const map = require('through2-map');

if (process.argv.length !== 3) {
  console.log('Usage node 12_http_uppercaser.js 3002')
  process.exit(1);
}

const server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  request.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

const port = process.argv[2];
server.listen(port);
console.log(`Server listening at http://localhost:${port}`);
