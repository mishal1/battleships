var socket = io();

socket.on('start game', function(msg){
  console.log(msg)
  $('#opponentboard').css("display", "inline-block");
  $('.boardtext').css("display", "block");
  $('#placeshipstext').text(' ');
});