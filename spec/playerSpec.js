var Player = require('../lib/player');

describe('Player', function(){
  var player, board;

  beforeEach(function(){
    // playerBoard = jasmine.createSpyObj('playerboard', ['']);
    board = jasmine.createSpyObj('board', ['hit', 'placeShip']);
    cell = jasmine.createSpyObj('cell', ['']);
    player = new Player('Mishal', board);
  });

  it('has a name', function(){
    expect(player.name).toEqual('Mishal');
  });

  it('has a board', function(){
    expect(player.board).toEqual(board);
  });

  it('has a turn to hit on opponents board', function(){
    player.hit(board, cell);
    expect(board.hit).toHaveBeenCalled();
  });

  it('places ships on their own board', function(){
    player.placeShip(cell);
    expect(board.placeShip).toHaveBeenCalled();
  });

});