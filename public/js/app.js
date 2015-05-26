var hideUserInput = function(){
  $('#askUserName').hide();
  $('#playgame').hide();
}

var showUserBoard = function(){
  $('#userboard').css("display", "inline-block");
  $('#placeshipstext').css("display", "block");
}

var addShipImage = function(pick){
  var tile = $('#user-' + pick);
  tile.append('<img src="img/ship.png">');
};

var placeShip = function(message){
  if(message){
    $('#placeshipstext').text(message);
  } else {
    $('#placeshipstext').text('Click where you would like to place your ships');
    addShipImage(pick);
  }
};

var showOpponentBoard = function(){
  $('#opponentboard').css("display", "inline-block");
  $('.boardtext').css("display", "block");
  $('#placeshipstext').text(' ');
}

var opponentBoardHit = function(data){
  var tile = $('#opponent-' + data.pick);
  tile.append('<img src="img/x.svg" id="cross">');
}