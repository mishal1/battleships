var Cell = require('../lib/cell');

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

    it('can remove ship', function(){
      cell.removeShip();
      expect(cell.hasShip).toBe(false);
    });
    
  });

  it('is not hit when initialised', function(){
    expect(cell.isHit).toBe(false);
  });

  it('can be hit', function(){
    cell.hit();
    expect(cell.isHit).toBe(true);
  });


});