var Player = require('../lib/player');

describe('Player', function(){
  var player, board;

  beforeEach(function(){
    board = jasmine.createSpyObj('board', ['hit', 'tryToPlaceShip']);
    player = new Player('Mishal', board);
  });

  it('has a name', function(){
    expect(player.name).toEqual('Mishal');
  });

  it('has a board', function(){
    expect(player.board).toEqual(board);
  });

  it('has a turn to hit on opponents board', function(){
    player.hit(board, 1);
    expect(board.hit).toHaveBeenCalled();
  });

  it('places ships on their own board', function(){
    player.placeShip(1);
    expect(board.tryToPlaceShip).toHaveBeenCalled();
  });

});