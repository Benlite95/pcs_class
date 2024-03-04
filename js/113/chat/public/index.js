/* global io, $*/
const socketIo = io();

$('#login').on('submit', function (e) {
  e.preventDefault();

  let me = $('#user').val();
  socketIo.emit('login', me, result => {
    if (result) {
      $('#error').text(result);
    } else {
      $(this).slideUp();
      $('#message-container').slideDown();

      const messages = $('#messages');
      socketIo.on('msg', msg => {
        //messages.append(`<div>${msg}</div>`);
        messages.append(`<div>${msg.name === me ? 'I' : msg.name} said: ${msg.msg}</div>`);
      });

      socketIo.on('info', info => {
        messages.append(`<div class="info">${info}</div>`);
      });
    }
  });
});

const msg = $('#msg');
$('#message').on('submit', e => {
  e.preventDefault();

  socketIo.emit('msg', msg.val());
  msg.val('');
});
