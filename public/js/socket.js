var socket = io();

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
  var pick = $(this).data('pick');
  socket.emit('add ship', pick);
  addShipImage(pick);
});

// var displayWaitingMessage = function(){
//   $('#placeshipstext').text('Waiting for other player...');
// };

var addShipImage = function(pick){
  var tile = $('#user-' + pick);
  tile.append('<img src="img/ship.png">');
};