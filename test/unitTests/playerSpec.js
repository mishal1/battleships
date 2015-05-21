var Player = require('../../src/player');

describe('Player', function(){
  var player, board;

  beforeEach(function(){
    board = jasmine.createSpyObj('board',['addShip']);
    player = new Player('Mishal', 1, board);
  });

  it('has a name', function(){
    expect(player.name).toEqual('Mishal');
  });

  it('has a socket id', function(){
    expect(player.socket).toEqual(1);
  });

  it('has a board', function(){
    expect(player.board).toEqual(board)
  })

  it('adds ship', function(){
    player.addShip('pick');
    expect(board.addShip).toHaveBeenCalled();
  })

});