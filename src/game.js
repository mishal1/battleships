function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = player1;
  this.opponent = player2;
}

Game.prototype.canStart = function(fleetCount) {
  return this.player1.ready(fleetCount) && this.player2.ready(fleetCount);
};

Game.prototype.turn = function(position) {
  var message = this.currentPlayer.hit(position, this.opponent.board);
  this.switchTurns();
  return message;
};

Game.prototype.switchTurns = function() {
  if(this.currentPlayer === this.player1){
    this.setPlayers(this.player2, this.player1);
  } else {
    this.setPlayers(this.player1, this.player2);
  }
};

Game.prototype.setPlayers = function(player1, player2) {
  this.currentPlayer = player1
  this.opponent = player2
};

Game.prototype.winner = function() {
  if(this.currentPlayer.lost())
    return this.opponent;
  return false;
};

module.exports = Game;