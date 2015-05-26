var Player = require('../../src/player');

describe('Player', function(){
  var player, board, fleetCount;

  beforeEach(function(){
    board = jasmine.createSpyObj('board',['placeShip', 'hit', 'isSet']);
    player = new Player('Mishal', 1, board);
    fleetCount = 1;
  });

  it('has a name', function(){
    expect(player.name).toEqual('Mishal');
  });

  it('has a socket id', function(){
    expect(player.socket).toEqual(1);
  });

  it('has a board', function(){
    expect(player.board).toEqual(board)
  });

  it('adds ship', function(){
    player.placeShip('pick');
    expect(board.placeShip).toHaveBeenCalled();
  });

  it('has a turn to hit on opponents board', function(){
    player.hit(1, board);
    expect(board.hit).toHaveBeenCalled();
  });

  it('check player is', function(){
    player.ready(fleetCount)
    expect(board.isSet).toHaveBeenCalled();
  });

  it('places ships on their own board', function(){
    player.placeShip(1);
    expect(board.placeShip).toHaveBeenCalled();
  });

  it('has not lost the game', function(){
    expect(player.lost()).toBe(false);
  });

  it('has not lost the game', function(){
    board.allShipsSunk = true;
    expect(player.lost()).toBe(true);
  });

  it('can set game id', function(){
    player.gameId = 1;
    expect(player.gameId).toEqual(1);
  });

});