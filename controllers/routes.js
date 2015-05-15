var Cell = require('../src/cell');
var Player = require('../src/player');
var Board = require('../src/board');

module.exports.controller = function(app, game, fleet, ship, io){

  var player;

  app.get('/', function(request, response){
    response.render('index');
  });

  app.post('/addUser', function(request, response){
    var board = setUpBoard();
    var name = request.body.name;
    player = addPlayerToGame(board, name);
  });

  app.post('/addShip', function(request, response){
    if(game.ready()){
      io.emit('start game', {message: 'game can finally start'});
    } else {
      var playerReady = checkIfGameIsReady(fleet, request.body.pick);
      response.send(playerReady);
    }
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
      player.placeShip(position, ship)
    return ready;
  }
  
}

