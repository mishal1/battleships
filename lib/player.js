function Player(name, board){
  this.name = name;
  this.board = board;
}

Player.prototype.hit = function(board, cell) {
  board.hit();
};

Player.prototype.placeShip = function(cell) {
  this.board.placeShip(cell);
};

module.exports = Player;