var Game = require('../lib/game');

describe('Game', function(){

  var game, board, player, ships;

  beforeEach(function(){
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
      player1 = jasmine.createSpyObj('player', ['ready', 'hit']);
      player1.ready = function(){ return true; };
      player1.lost = function(){ return true; };
      player2 = jasmine.createSpyObj('player', ['ready', 'hit']);
      player2.ready = function(){ return true; };
      player2.lost = function(){ return false; };
      player2.name = 'Mishal';
      game.add(player1);
    });

    it('has a player', function(){
      expect(game.players).toEqual([player1]);
    });

    it('is not ready when there is one player', function(){
      expect(game.ready()).toBe(false);
    });

    describe('add another player', function(){

      beforeEach(function(){
        game.add(player2);
      });

      it('is ready when both players are ready', function(){
        expect(game.ready()).toBe(true);
      });
      
      it('the current player is the position 0', function(){
        expect(game.currentPos).toEqual(0);
      });

      it('has a current player', function(){
        expect(game.currentPlayer()).toEqual(player1);
      });

      it('the current player is the position 0', function(){
        expect(game.opponentPos).toEqual(1);
      });

      it('has an opponent', function(){
        expect(game.opponent()).toEqual(player2);
      });

      describe('has a turn', function(){

        beforeEach(function(){
          game.turn(1);
        });

        it('player hits opponents board', function(){
          expect(player1.hit).toHaveBeenCalled();
        });
  
        it('the current player is the position 1', function(){
          expect(game.currentPos).toEqual(1);
        });

        it('the opponent player is the position 0', function(){
          expect(game.opponentPos).toEqual(0);
        });

        it('declares a winner', function(){
          expect(game.turn(1)).toEqual('Mishal wins the game');
        });

      });

    });

  });

});