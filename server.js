var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
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

var session = require('express-session');
app.use(session({ secret: 'cat', resave: true, saveUninitialized: true }));

var ship = new Ship(1);
var fleet = [ship, ship];
var game = new Game(fleet);

app.get('/', function(request, response){
  response.render('index');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.post('/addUser', function(request, response){
  var board = setUpBoard();
  var name = request.body.name;
  var player = addPlayerToGame(board, name);
  session.currentPlayer = player;
});

app.post('/addShip', function(request, response){
  var playerReady = checkIfGameIsReady(fleet, request.body.pick);
  response.send(playerReady)
});

http.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = http;

var createNewCells = function(array){
  for(var i = 0; i < 9; i++){
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
  return player;
}

var checkIfGameIsReady = function(fleet, position){
  var ready = session.currentPlayer.ready(fleet)
  if(!ready)
    session.currentPlayer.placeShip(position, ship)
  return ready;
}