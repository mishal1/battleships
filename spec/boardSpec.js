var Board = require('../lib/board');

describe('Board', function(){

  var board, cell, cells, ship;

  beforeEach(function(){
    cell = jasmine.createSpyObj('cell', ['placeShip', 'hit']);
    cells = [cell];
    ship = jasmine.createSpyObj('ship', ['']);
    ships = [ship];
    board = new Board(cells);
  });

  it('should have cells', function(){
    expect(board.cells).toEqual(cells);
  });

  it('has no placed ships when initialized', function(){
    expect(board.placedShips).toEqual([]);
  });

  describe('when a ship is placed on the board', function(){

    beforeEach(function(){
      cell.hasShip = false;
      board.tryToPlaceShip(cell, ship);
    });

    it('places ship on board', function(){
      expect(cell.placeShip).toHaveBeenCalled();
    });

    it('cannot place a ship on a cell that already contains a ship', function(){
      cell.hasShip = true;
      expect(board.tryToPlaceShip(cell, ship)).toEqual('Cell already contains a ship');
    });

    it('has a placed ship', function(){
      expect(board.placedShips).toEqual([ship]);
    });
    
  });

  describe('hits cell', function(){

    beforeEach(function(){
      cell.isHit = false;
      board.hit(cell);
    });

    it('cell is hit', function(){
      expect(cell.hit).toHaveBeenCalled();
    });

    it('cannot hit a cell that has already been hit', function(){
      cell.isHit = true;
      expect(board.hit(cell)).toEqual('Cell has already been hit');
    });

  });


});