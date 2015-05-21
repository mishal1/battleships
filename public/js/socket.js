var socket = io();

var pick;

$('#playgame').click(function(){ 
  var name = $('#usernameinput').val();
  $('#usernameinput').val('');
  $('#askUserName').hide();
  $('#playgame').hide();
  $('#userboard').css("display", "inline-block");
  $('#placeshipstext').css("display", "block");
  socket.emit('add user', name);
});

$('.blue').on('click', function(){
  pick = $(this).data('pick');
  socket.emit('add ship', pick);
});

var addShipImage = function(pick){
  var tile = $('#user-' + pick);
  tile.append('<img src="img/ship.png">');
};

socket.on('place ship', function(message){
  placeShip(message);
  socket.emit('check board ready');
});

var placeShip = function(message){
  if(message){
    $('#placeshipstext').text(message);
  } else {
    $('#placeshipstext').text('Click where you would like to place your ships');
    addShipImage(pick);
  }
};

socket.on('check board ready', function(ready){
  if(ready)
    $('#placeshipstext').text('Waiting for another player...');
});
