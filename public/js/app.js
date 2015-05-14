$('#playgame').click(function(){ 
  var name = $('#usernameinput').val();
  $('#usernameinput').val('');
  $('#askUserName').hide();
  $('#playgame').hide();
  $('#userboard').css("display", "inline-block");
  $('#placeshipstext').css("display", "block");
  $.ajax({
        url: '/addUser',
        type: 'POST',
        data: {name: name}
      });
});

$('.blue').on('click', function(){
  var pick = $(this).data('pick');
    $.ajax({
        url: '/addShip',
        type: 'POST',
        data: {pick: pick},
        success: function(ready){
          if(!ready){
            addShipImage(pick);
          } else {
            displayWaitingMessage();
          }
        }
      });
});

var displayWaitingMessage = function(){
  $('#placeshipstext').text('Waiting for other player...');
};

var addShipImage = function(pick){
  var tile = $('#user-' + pick);
  tile.append('<img src="img/ship.png">');
};