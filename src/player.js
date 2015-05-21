function Player(name, socket, board){
  this.name = name;
  this.socket = socket;
  this.board = board;
}

Player.prototype.addShip = function(pick) {
  this.board.addShip(pick);
};

module.exports = Player;