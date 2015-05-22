var Game = require('../../src/game');

describe ('Game', function(){

  var game, player1, player2;

  beforeEach(function(){
    game = new Game(player1, player2);
  });

  it('has two players', function(){
    expect(game.player1).toBe(player1);
    expect(game.player2).toBe(player2);
  });

});