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

var ship = new Ship();
var game = new Game([ship]);

app.get('/', function(request, response){
  response.render('index');
});

server.listen(port, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;