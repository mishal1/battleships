var Game = require('../lib/game');

describe('Game', function(){

  var game, board, player, ships;

  beforeEach(function(){
    // board = {
    //   allShipsSunk: function(){
    //   return true;
    // }};
    ship = jasmine.createSpyObj('ship', ['']);
    game = new Game([ship]);
  });

  it('has no players when initialized', function(){
    expect(game.players).toEqual([]);
  });

  it('has no players when initialized', function(){
    expect(game.fleet).toEqual([ship]);
  });

  describe('when a player is added', function(){

    beforeEach(function(){
      player = {
        ready: function(){
          return true;
        }
      };
      game.add(player);
    });

    it('has a player', function(){
      expect(game.players).toEqual([player]);
    });

    it('is not ready when there is one player', function(){
      expect(game.ready()).toBe(false);
    });

    it('is ready when both players are ready', function(){
      game.add(player);
      expect(game.ready()).toBe(true);
    });

  });

  // describe('check if it is over', function(){

  //   it('check if ships have sunk', function(){
  //     spyOn(board, "allShipsSunk");
  //     game.checkIfWon();
  //     expect(board.allShipsSunk).toHaveBeenCalled();
  //   });

  //   it('all ships have sunk', function(){
  //     expect(game.checkIfWon()).toEqual('Game over');
  //   });

  //   it('all ships have not sunk', function(){
  //     spyOn(board, "allShipsSunk");
  //     expect(game.checkIfWon()).toEqual(false);
  //   });
    
  // });


});