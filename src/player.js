function Player(name, socket, board){
  this.name = name;
  this.socket = socket;
  this.board = board;
}

Player.prototype.hit = function(position, board) {
  return board.hit(position);
};

Player.prototype.placeShip = function(position) {
  return this.board.placeShip(position);
};

Player.prototype.ready = function(fleetCount) {
  return this.board.isSet(fleetCount);
};

Player.prototype.lost = function() {
  if(this.board.allShipsSunk())
    return true;
  return false;
};

module.exports = Player;