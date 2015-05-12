function Player(name, board){
  this.name = name;
  this.board = board;
}

Player.prototype.hit = function(position, board) {
  board.hit(position);
};

Player.prototype.placeShip = function(position, ship) {
  this.board.tryToPlaceShip(position, ship);
};

Player.prototype.ready = function(fleet) {
  if(fleet.length === this.board.placedShips.length)
    return true;
  return false;
};

Player.prototype.lost = function() {
  if(this.board.allShipsSunk)
    return true;
  return false;
};

module.exports = Player;