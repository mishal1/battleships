var socket = io();

var pick, hitPick;

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
  if(ready){
    $('#placeshipstext').text('Waiting for opponent...');
    socket.emit('check if game can start');
  }
});

socket.on('start game', function(){
  showOpponentBoard();
  socket.emit('play');
})

socket.on('current player', function(){
  $('#placeshipstext').text('Hit a cell!');
  $('.red').on('click', function(){
    hitPick = $(this).data('pick');
    socket.emit('turn', hitPick);
  });
});

socket.on('wait for opponent', function(){
  $('#placeshipstext').text('Wait for your opponent!');
});

socket.on('update current board', function(data){
  if(data.message === 'Hit!'){
    var tile = $('#opponent-' + data.pick);
    tile.append('<img src="img/ship.png">');
  }
  opponentBoardHit(data);
  $(".red").off();
  socket.emit('play');
});

socket.on('update opponent', function(data){
  var tile = $('#user-' + data.pick);
  tile.append('<img src="img/x.svg" id="cross">');
  socket.emit('play');
});

socket.on('display winner', function(message){
  $('#placeshipstext').text(message + ' wins!');
});
