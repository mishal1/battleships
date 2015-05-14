var socket = io();

socket.on('start game', function(msg){
  console.log(msg)
});