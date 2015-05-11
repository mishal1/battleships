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
  return this.message();
};

Cell.prototype.message = function() {
  if(this.hasShip)
    return 'Hit!';
  return 'Missed!';
};

module.exports = Cell;