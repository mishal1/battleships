function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.canStart = function(fleetCount) {
  return this.player1.ready(fleetCount) && this.player2.ready(fleetCount);
};

module.exports = Game;