$('#playgame').click(function(){ 
  var name = $('#usernameinput').val();
  $('#usernameinput').val('');
  $('#askUserName').hide();
  $('#playgame').hide();
  $('#userboard').show();
  $('#placeshipstext').css("display", "block");
});

$('.blue').on('click', function(){
  var pick = $(this).data('pick');
  var tile = $('#user-' + pick);
  tile.append('<img src="img/ship.png">')
});