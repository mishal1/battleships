function Game(fleet){
  this.fleet = fleet;
  this.players = [];
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

module.exports = Game;