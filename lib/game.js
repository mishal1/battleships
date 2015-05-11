function Game(fleet){
  this.fleet = fleet;
  this.players = [];
  this.currentPos = 0;
  this.opponentPos = 1;
}

Game.prototype.checkIfWon = function() {
  if(this.board.allShipsSunk())
    return 'Game over';
  return false;
};

Game.prototype.add = function(player) {
  this.newPlayer(player);
};

Game.prototype.newPlayer = function(player) {
  if(this.players.length < 2)
    this.players.push(player);
};

Game.prototype.ready = function() {
  if(this.checkIfReady())
    return true;
  return false;
};

Game.prototype.checkIfReady = function() {
  return this.players.length == 2 && this.players[0].ready() && this.players[1].ready();
};

Game.prototype.currentPlayer = function() {
  return this.players[this.currentPos];
};

Game.prototype.opponent = function() {
  return this.players[this.opponentPos];
};

Game.prototype.turn = function(position) {
  var opponentBoard = this.opponent().board;
  this.currentPlayer().hit(position, opponentBoard);
  this.switchTurns();
  if(this.currentPlayer().lost())
    return this.opponent();
};

Game.prototype.switchTurns = function() {
  if(this.currentPos === 0){
    this.setPlayerPositions(1, 0);
  } else {
    this.setPlayerPositions(0, 1);
  }
};

Game.prototype.setPlayerPositions = function(current, opponent) {
    this.currentPos = current;
    this.opponentPos = opponent;
};

module.exports = Game;