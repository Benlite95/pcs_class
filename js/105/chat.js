const net = require('net');
let sockets = [];
let chat = '';
const server = net.createServer(function (socket) {
  sockets.push(socket);

  socket.on('data', data => {
    chat += data;
    console.log(`sending to ${sockets.length - 1} chatters`);
    sockets.filter(s => s !== socket).forEach(s => s.write(data));
  });

  socket.on('close', () => sockets = sockets.filter(s => s !== socket));

  socket.write(chat);
});
server.listen(8000);
