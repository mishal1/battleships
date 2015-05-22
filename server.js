var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

var Player = require('./src/player');
var Board = require('./src/board');
var Cell = require('./src/cell');
var Game = require('./src/game');

var waitingPlayers = [];
var games = {};
var id = 1;

io.on('connection', function(socket){

  var player;

  socket.on('add user', function(name){
    var cells = [];
    createCells(cells);
    var board = new Board(cells);
    player = new Player(name, socket.id, board);
    waitingPlayers.push(player);
    if(waitingPlayers.length >= 2)
      setGame();
  });

  socket.on('add ship', function(pick){
    var message = player.placeShip(pick);
    socket.emit('place ship', message);
  });

  socket.on('check board ready', function(){
    var ready = player.ready(2);
    socket.emit('check board ready', ready);
  })

  socket.on('disconnect', function(){
    for(var i = 0; i < waitingPlayers.length; i++){
      if(waitingPlayers[i].socket == socket.id)
        waitingPlayers.splice(i, 1);
    }
  });

});

var createCells = function(cells){
  for(var i = 0; i < 9; i++){
    var cell = new Cell();
    cells.push(cell);
  }
}

var setGame = function(){
  var game = new Game(waitingPlayers[0], waitingPlayers[1]);
  for(var i = 0; i < 2; i++){
    waitingPlayers[0].gameId = id;
    waitingPlayers.splice(0, 1); 
  }
  games[id] = game;
  id += 1;
  console.log(games);
}

app.get('/', function(request, response){
  response.render('index');
});


http.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = http;
