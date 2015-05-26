var Game = require('../../src/game');

describe ('Game', function(){

  var game, player1, player2;

  beforeEach(function(){
    player1 = jasmine.createSpyObj('player', ['ready']);
    player2 = jasmine.createSpyObj('player', ['ready']);
    game = new Game(player1, player2);
  });

  it('has two players', function(){
    expect(game.player1).toBe(player1);
    expect(game.player2).toBe(player2);
  });

  it('can check if players are ready', function(){
    game.canStart();
    expect(player1.ready).toHaveBeenCalled();
    expect(player1.ready).toHaveBeenCalled();
  });

});