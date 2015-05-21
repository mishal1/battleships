var Cell = require('../../src/cell');

describe ('Cell', function(){

  var cell;

  beforeEach(function(){
    cell = new Cell();
  });

  it('has no ship when initialised', function(){
    expect(cell.hasShip).toBe(false);
  });

  describe('place ship', function(){

    beforeEach(function(){
      cell.placeShip();
    });

    it('has a ship', function(){
      expect(cell.hasShip).toBe(true);
    });

    it('can be hit with a ship', function(){
      expect(cell.hit()).toEqual("Hit!");
    });

    it('cannot place a ship if cell already contains one', function(){
      expect(cell.placeShip()).toEqual("Cell already contains a ship");
    });
    
  });

  it('is not hit when initialised', function(){
    expect(cell.isHit).toBe(false);
  });

  it('can be hit', function(){
    cell.hit();
    expect(cell.isHit).toBe(true);
  });

  it('can be hit with no ship', function(){
    expect(cell.hit()).toEqual("Missed!");
  });

  it('cannot be hit more than once', function(){
    cell.hit();
    expect(cell.hit()).toEqual("Cell has already been hit!");
  });

});