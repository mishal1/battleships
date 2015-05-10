var Player = require('../lib/player');

describe('Player', function(){
  var player, board;

  beforeEach(function(){
    board = jasmine.createSpyObj('board', ['']);
    player = new Player('Mishal', board);
  });

  it('has a name', function(){
    expect(player.name).toEqual('Mishal');
  });

  it('has a board', function(){
    expect(player.board).toEqual(board);
  });

});