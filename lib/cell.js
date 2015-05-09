function Cell(){
  this.hasShip = false;
  this.isHit = false;
}

Cell.prototype.placeShip = function() {
  this.hasShip = true;
};

Cell.prototype.removeShip = function() {
  this.hasShip = false;
};

Cell.prototype.hit = function() {
  this.isHit = true;
};

module.exports = Cell;