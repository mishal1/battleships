var socket = io();

socket.on('start game', function(msg){
  $('#opponentboard').css("display", "inline-block");
  $('.boardtext').css("display", "block");
  $('#placeshipstext').text(' ');
  $.ajax({
    url: '/turn',
    type: 'POST',
    data: {},
    success: function(data){
    }
  });
});

var turn = function(){
  
}