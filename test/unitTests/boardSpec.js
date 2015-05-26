var Board = require('../../src/board');

describe('Board', function(){

  var board, cell, ship;

  beforeEach(function(){
    cell = jasmine.createSpyObj('cell', ['placeShip', 'hit']);
    ship = {};
    board = new Board([cell, cell, cell, cell]);
  });

  it('should have cells', function(){
    expect(board.cells).toEqual({1: cell, 2: cell, 3: cell, 4: cell});
  });

  describe('when a ship is placed on the board', function(){

    beforeEach(function(){
      cell.hasShip = false;
      board.placeShip(1, ship);
    });

    it('places ship on board', function(){
      expect(cell.placeShip).toHaveBeenCalled();
    });

    it('board is not ready', function(){
      expect(board.isSet(1)).toBe(false);
    })
    
  });

  describe('hits cell', function(){

    beforeEach(function(){
      cell.isHit = false;
      board.hit(1);
    });

    it('cell is hit', function(){
      expect(cell.hit).toHaveBeenCalled();
    });

  });

  describe('cell has ship', function(){

    beforeEach(function(){
      cell.hasShip = true;
    });

    it('ships sunk', function(){
      cell.isHit = true;
      expect(board.allShipsSunk()).toBe(true);
    });

    it('ship not sunk', function(){
      cell.isHit = false;
      expect(board.allShipsSunk()).toBe(false);
    });

    it('board is ready', function(){
      expect(board.isSet(1)).toBe(true);
    })

  });

});