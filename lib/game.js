function Game(board){
  this.board = board;
}

Game.prototype.checkIfWon = function() {
  if(this.board.allShipsSunk())
    return 'Game over';
  return false;
};

module.exports = Game;