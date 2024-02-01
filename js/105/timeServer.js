const net = require('net');
const server = net.createServer(function (socket) {
  // "2013-07-06 17:42"
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hour = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  socket.end(`${year}-${month}-${day} ${hour}:${minutes}`);
});
server.listen(8000);
