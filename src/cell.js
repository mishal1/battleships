function Cell(){
  this.hasShip = false;
  this.isHit = false;
}

Cell.prototype.placeShip = function() {
  if(this.hasShip)
    return 'Cell already contains a ship!';
  this.hasShip = true;
};

Cell.prototype.hit = function() {
  if(this.isHit)
    return 'Cell has already been hit!'
  this.isHit = true;
  return this.hitMessage();
};

Cell.prototype.hitMessage = function() {
  if(this.hasShip)
    return 'Hit!';
  return 'Missed!';
};

module.exports = Cell;