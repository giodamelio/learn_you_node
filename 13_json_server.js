const http = require('http');

const SimpleRouter = require('simple-router');

if (process.argv.length !== 3) {
  console.log('Usage node 12_http_uppercaser.js 3002')
  process.exit(1);
}

const router = new SimpleRouter({ rootPath: '/api' });

router.get('/parsetime', function(req, res) {
  const date = new Date(req.url.query.iso);
  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
});

router.get('/unixtime', function(req, res) {
  const date = new Date(req.url.query.iso);
  res.json({
    unixtime: Number(new Date(date)),
  });
});

const server = http.createServer(router.route());

const port = process.argv[2];
server.listen(port);
console.log(`Server listening at http://localhost:${port}`);
