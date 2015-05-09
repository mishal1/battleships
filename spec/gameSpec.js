var Game = require('../lib/game');

describe('Game', function(){

  var game, board;

  beforeEach(function(){
    board = {
      allShipsSunk: function(){
      return true;
    }};
    game = new Game(board);
  });

  it('has a board', function(){
    expect(game.board).toEqual(board);
  });

  describe('check if it is over', function(){

    it('check if ships have sunk', function(){
      spyOn(board, "allShipsSunk");
      game.checkIfWon();
      expect(board.allShipsSunk).toHaveBeenCalled();
    });

    it('all ships have sunk', function(){
      expect(game.checkIfWon()).toEqual('Game over');
    });

    it('all ships have not sunk', function(){
      spyOn(board, "allShipsSunk");
      expect(game.checkIfWon()).toEqual(false);
    });
    
  });


});