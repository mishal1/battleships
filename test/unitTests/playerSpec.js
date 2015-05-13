var Player = require('../../src/player');

describe('Player', function(){
  var player, board, ship;

  beforeEach(function(){
    board = jasmine.createSpyObj('board', ['hit', 'tryToPlaceShip']);
    ship = jasmine.createSpyObj('ship', ['']);
    board.placedShips = [];
    player = new Player('Mishal', board);
  });

  it('has a name', function(){
    expect(player.name).toEqual('Mishal');
  });

  it('has a board', function(){
    expect(player.board).toEqual(board);
  });

  it('has a turn to hit on opponents board', function(){
    player.hit(1, board);
    expect(board.hit).toHaveBeenCalled();
  });

  it('is not ready', function(){
    expect(player.ready([ship])).toEqual(false);
  });

  describe('when a ship is placed', function(){
  
    beforeEach(function(){
      player.placeShip(1, ship);
    });

    it('places ships on their own board', function(){
      expect(board.tryToPlaceShip).toHaveBeenCalled();
    });

    it('the player is ready', function(){
      board.placedShips = [ship];
      expect(player.ready([ship])).toEqual(true);
    });

  });

  it('has not lost the game', function(){
    expect(player.lost()).toBe(false);
  });

  it('has not lost the game', function(){
    board.allShipsSunk = true;
    expect(player.lost()).toBe(true);
  });

});