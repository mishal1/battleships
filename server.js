var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var Cell = require('./src/cell');
var Ship = require('./src/ship');
var Player = require('./src/player');
var Game = require('./src/game');
var Board = require('./src/board');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));

var fleet = [new Ship(1), new Ship(1)];
var game = new Game(fleet);

app.get('/', function(request, response){
  response.render('index');
});


app.post('/addUser', function(request, response){
  var board = setUpBoard();
  var name = request.body.name;
  addPlayerToGame(board, name);
  console.log(game)
});

server.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;

var createNewCells = function(array){
  for(var i = 0; i < 4; i++){
    var cell = new Cell();
    array.push(cell);
  }
};

var setUpBoard = function(){
  var cells = [];
  createNewCells(cells);
  var board = new Board();
  board.setUp(cells);
  return board
}

var addPlayerToGame = function(board, name){
  var player = new Player(name, board);
  game.add(player);
}