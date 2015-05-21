function Board(cells){
  this.cells = {};
  this.addCells(cells, this, 1);
}

Board.prototype.addCells = function(cells, that, cellNumber) {
  cells.forEach(function(cell){
    that.cells[cellNumber] = cell;
    cellNumber += 1;
  });
};

Board.prototype.tryToPlaceShip = function(position, ship) {
  return this.placeShip(this.cells[position], ship);
};

Board.prototype.placeShip = function(cell, ship) {
  return cell.placeShip();
};

Board.prototype.hit = function(position) {
  return this.cells[position].hit();
};

Board.prototype.allShipsSunk = function() {
  var result = true;
  for(var key in this.cells) {
    if(!this.cells[key].isHit && this.cells[key].hasShip)
      result = false;
  }
  return result;
};

module.exports = Board;