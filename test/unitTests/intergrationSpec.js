var Cell = require('../../src/cell');
var Ship = require('../../src/ship');
var Player = require('../../src/player');
var Game = require('../../src/game');
var Board = require('../../src/board');

describe('Play game', function(){

  var player1Cells, player2Cells, player1Board, player2Board, player1, player2, game, fleet, ship;

  var createNewCells = function(array){
    for(var i = 0; i < 4; i++){
      var cell = new Cell();
      array.push(cell);
    }
  };

  beforeEach(function(){
    player1Cells = [];
    player2Cells = [];
    createNewCells(player1Cells);
    createNewCells(player2Cells);
    player1Board = new Board();
    player2Board = new Board();
    player1Board.setUp(player1Cells);
    player2Board.setUp(player2Cells);
    player1 = new Player('something', player1Board);
    player2 = new Player('mishal', player2Board);
    ship = new Ship();
    fleet = [ship];
    game = new Game(fleet);
    game.add(player1);
    game.add(player2);
  });

  it('player 1 cells', function(){
    expect(player1Cells.length).toEqual(4);
  });

  it('player 2 cells', function(){
    expect(player2Cells.length).toEqual(4);
  });

  it('player 1 board to have cells', function(){
    expect(Object.keys(player1Board.cells).length).toEqual(4);
  });

  it('player 2 board to have cells', function(){
    expect(Object.keys(player2Board.cells).length).toEqual(4);
  });

  it('player 1 has a board', function(){
    expect(player1.board).toEqual(player1Board);
  });

  it('player 2 has a board', function(){
    expect(player2.board).toEqual(player2Board);
  });

  it('player 2 has a board', function(){
    expect(fleet.length).toEqual(1);
  });

  it('game has a fleet', function(){
    expect(game.fleet).toEqual(fleet);
  });

  it('game is ready', function(){
    expect(game.ready()).toEqual(false);
  });

  describe('players have placed ships', function(){
  
    beforeEach(function(){
      player1.placeShip(1, ship);
      player2.placeShip(2, ship);
    });

    it('game is ready', function(){
      expect(game.ready()).toEqual(true);
    });

    it('game has turn', function(){
      expect(game.currentPlayer()).toEqual(player1);
      game.turn(2);
      expect(game.currentPlayer()).toEqual(player2);
    });

    it('player wins a game', function(){
      game.turn(2);
      expect(game.turn(1)).toEqual('mishal wins the game');
    });
    
  });


});

// loop through length, add ship on cell then position += 1 