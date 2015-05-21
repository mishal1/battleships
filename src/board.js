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

Board.prototype.placeShip = function(position) {
  return this.cells[position].placeShip();
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

Board.prototype.set = function(fleetLength) {
  var number = this.placedShipsNumber(0);
  return number >= fleetLength;
};

Board.prototype.placedShipsNumber = function(number) {
  for(var key in this.cells) {
    if(this.cells[key].hasShip)
      number += 1
  }
  return number;
};

module.exports = Board;