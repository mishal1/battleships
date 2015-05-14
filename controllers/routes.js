module.exports.controller = function(app, game){

  var Cell = require('../src/cell');
  var Player = require('../src/player');
  var Board = require('../src/board');
  var player

  app.get('/', function(request, response){
    response.render('index');
  });


  app.post('/addUser', function(request, response){
    var board = setUpBoard();
    var name = request.body.name;
    player = addPlayerToGame(board, name);
  });

  app.post('/addShip', function(request, response){
    // var playerReady = checkIfGameIsReady(fleet, request.body.pick);
    // response.send(playerReady);
    // if(game.ready())
    //   console.log('READY');
  });

  var createNewCells = function(array){
    for(var i = 0; i < 9; i++){
      var cell = new Cell();
      array.push(cell);
    }
  };

  var setUpBoard = function(){
    var cells = [];
    createNewCells(cells);
    var board = new Board();
    board.setUp(cells);
    return board
  }

  var addPlayerToGame = function(board, name){
    var player = new Player(name, board);
    game.add(player);
    return player;
  }

  var checkIfGameIsReady = function(fleet, position){
    var ready = player.ready(fleet)
    if(!ready)
      session.currentPlayer.placeShip(position, ship)
    return ready;
  }
  
}

