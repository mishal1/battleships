var Ship = require('../lib/ship');

describe ('Ship', function(){

  var ship;

  beforeEach(function(){
    ship = new Ship(1);
  });

  it('has a length', function(){
    expect(ship.length).toEqual(1);
  });

});