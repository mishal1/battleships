var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var Game = require('./src/game');
var Ship = require('./src/ship');

var Cell = require('./src/cell');
var Player = require('./src/player');
var Board = require('./src/board');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
// var session = require('express-session');
// app.use(session({ secret: 'cat', resave: true, saveUninitialized: true }));

var ship = new Ship(1);
var fleet = [ship, ship];
var game = new Game(fleet);

io.on('connection', function(socket){
  console.log('connected')

  var player;

  app.post('/addUser', function(request, response){
    var board = setUpBoard();
    var name = request.body.name;
    player = addPlayerToGame(board, name);
  });

  app.post('/addShip', function(request, response){
    if(game.ready()){
      io.emit('start game', {message: 'game can finally start'});
    } else {
      var playerReady = checkIfGameIsReady(fleet, request.body.pick, player);
      response.send(playerReady);
    }
  });

  app.post('/turn', function(){
    console.log(player);
  })

});

// var route = require('./controllers/routes.js');
// route.controller(app, game, fleet, ship, io, session);

  app.get('/', function(request, response){
    response.render('index');
  });

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

  var checkIfGameIsReady = function(fleet, position, player){
    var ready = player.ready(fleet)
    if(!ready)
      player.placeShip(position, ship)
    return ready;
  }


http.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = http;
