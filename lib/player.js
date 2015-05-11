function Player(name, board){
  this.name = name;
  this.board = board;
}

Player.prototype.hit = function(board, position) {
  board.hit(position);
};

Player.prototype.placeShip = function(position) {
  this.board.tryToPlaceShip(position, this.board);
};

module.exports = Player;