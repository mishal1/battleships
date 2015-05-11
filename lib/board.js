function Board(){
  this.placedShips = [];
}

Board.prototype.setUp = function(cells) {
  this.cells = {};
  var number = 1;
  var that = this;
  cells.forEach(function(cell){
    that.cells[number] = cell;
    number += 1;
  });
};

Board.prototype.tryToPlaceShip = function(position, ship) {
  if(this.cells[position].hasShip){
    return 'Cell already contains a ship';
  } else {
    this.placeShip(this.cells[position], ship);
  }
};

Board.prototype.placeShip = function(cell, ship) {
  cell.placeShip();
  this.placedShips.push(ship);
};

Board.prototype.hit = function(position) {
  if(this.cells[position].isHit){
    return 'Cell has already been hit';
  } else {
    this.cells[position].hit();
  }
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