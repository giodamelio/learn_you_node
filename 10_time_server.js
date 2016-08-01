const net = require('net');

const moment = require('moment');

if (process.argv.length !== 3) {
  console.log('Usage: node 10_time_server.js 3000');
}

const server = net.createServer(function(socket) {
  const timeString = moment().format('YYYY-MM-DD hh:mm');
  socket.write(`${timeString}\n`);
  socket.end();
});

const port = process.argv[2];
server.listen(port);
console.log(`Sever listening at tcp://localhost:${port}`);
