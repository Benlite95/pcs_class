const http = require('http');
const express = require('express');
const io = require('socket.io');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.end('hello world');
});

const server = http.createServer(app);

const socketIo = io(server);

let chatters = [];
socketIo.on('connection', socket => {
  console.log('got connection');

  let name;
  socket.on('login', (user, callback) => {
    if (chatters.find(c => c === user)) {
      return callback(`${user} is already taken. Pick another name`);
    }
    callback();
    name = user;
    chatters.push(name);
    socket.broadcast.emit('info', `${name} joined the chat`);
  });

  socket.on('msg', msg => {
    //socket.broadcast.emit('msg', msg);
    //socketIo.emit('msg', `${name} said: ${msg}`);
    socketIo.emit('msg', {name, msg});
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('info', `${name} has left the chat`);
    chatters = chatters.filter(c => c !== name);
  });
});

server.listen(80);
