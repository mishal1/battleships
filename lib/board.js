function Board(cells){
  this.cells = cells;
  this.placedShips = [];
}

Board.prototype.tryToPlaceShip = function(cell, ship) {
  if(cell.hasShip){
    return 'Cell already contains a ship';
  } else {
    this.placeShip(cell, ship);
  }
};

Board.prototype.placeShip = function(cell, ship) {
  cell.placeShip();
  this.placedShips.push(ship);
};

Board.prototype.hit = function(cell) {
  if(cell.isHit){
    return 'Cell has already been hit';
  } else {
    cell.hit();
  }
};

Board.prototype.allShipsSunk = function() {
  var result = true;
  this.cells.forEach(function(cell){
    if(!cell.isHit && cell.hasShip)
      result = false;
  });
  return result;
};

module.exports = Board;