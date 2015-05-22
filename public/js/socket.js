var socket = io();

var pick;

$('#playgame').click(function(){ 
  var name = $('#usernameinput').val();
  hideUserInput();
  showUserBoard();
  socket.emit('add user', name);
});

$('.blue').on('click', function(){
  pick = $(this).data('pick');
  socket.emit('add ship', pick);
});

socket.on('place ship', function(message){
  placeShip(message);
  socket.emit('check board ready');
});

socket.on('check board ready', function(ready){
  if(ready)
    $('#placeshipstext').text('Waiting for opponent...');
});
